import React, { createContext, useContext, useState, useEffect } from 'react'
import { Plant } from '../data/plants'

interface CartItem extends Plant {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (plant: Plant) => void
  removeFromCart: (plantId: number) => void
  updateQuantity: (plantId: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (plant: Plant) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === plant.id)
      if (existing) {
        return prev.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...plant, quantity: 1 }]
    })
  }

  const removeFromCart = (plantId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== plantId))
  }

  const updateQuantity = (plantId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId)
      return
    }
    setCartItems(prev =>
      prev.map(item => (item.id === plantId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace('₹', '').replace(',', ''))
      return sum + price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

