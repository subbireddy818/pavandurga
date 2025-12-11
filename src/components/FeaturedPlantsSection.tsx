import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { allPlants, Plant } from '../data/plants'
import { useCart } from '../context/CartContext'

export const FeaturedPlantsSection: React.FC = () => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
  const [showNotification, setShowNotification] = useState(false)
  // Show first 8 plants as featured
  const featuredPlants = allPlants.slice(0, 8)

  const handleQuantityChange = (plantId: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[plantId] || 1
      const newQuantity = Math.max(1, current + delta)
      return { ...prev, [plantId]: newQuantity }
    })
  }

  const handleAddToCart = (plant: Plant) => {
    const quantity = quantities[plant.id] || 1
    for (let i = 0; i < quantity; i++) {
      addToCart(plant)
    }
    setShowNotification(true)
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <section className="w-full pb-16 md:pb-24 lg:pb-32 pt-0 bg-background-light dark:bg-background-dark relative">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 animate-fade-in-up">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-primary/20 px-6 py-4 flex items-center gap-3 min-w-[280px]">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-text-light dark:text-text-dark">Added to cart successfully!</p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="flex-shrink-0 text-text-light/50 dark:text-text-dark/50 hover:text-text-light dark:hover:text-text-dark"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
              Featured <span className="gradient-text">Plants</span>
            </h2>
            <p className="text-lg md:text-xl text-subtle-light dark:text-subtle-dark max-w-2xl">
              Discover our handpicked selection of premium plants
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {featuredPlants.map((plant) => (
              <div
                key={plant.id}
                className="flex flex-col gap-2 sm:gap-3 lg:gap-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/20 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-square sm:aspect-[4/3] bg-cover"
                  style={{ backgroundImage: `url("${plant.image}")` }}
                  onClick={() => navigate(`/product/${plant.id}`)}
                />
                <div className="p-2 sm:p-3 lg:p-4 flex flex-col gap-2 sm:gap-3 lg:gap-4">
                  <p
                    className="text-[#0d1b12] dark:text-gray-100 text-xs sm:text-sm lg:text-lg font-bold leading-tight sm:leading-normal cursor-pointer hover:text-primary transition-colors line-clamp-2"
                    onClick={() => navigate(`/product/${plant.id}`)}
                  >
                    {plant.name}
                  </p>
                  <p className="text-[#0d1b12] dark:text-gray-300 text-sm sm:text-base font-semibold leading-normal">
                    {plant.price}
                  </p>
                  
                  {/* Quantity Selector - Hidden on mobile, shown on larger screens */}
                  <div className="hidden sm:flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuantityChange(plant.id, -1)
                      }}
                      className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-lg">remove</span>
                    </button>
                    <span className="text-xs sm:text-base font-semibold text-text-light dark:text-text-dark min-w-[20px] sm:min-w-[30px] text-center">
                      {quantities[plant.id] || 1}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuantityChange(plant.id, 1)
                      }}
                      className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-lg">add</span>
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(plant)
                    }}
                    className="w-full h-8 sm:h-9 lg:h-10 flex items-center justify-center gap-1 sm:gap-2 rounded-md sm:rounded-lg bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm sm:text-base">shopping_cart</span>
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/catalog')}
              className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span>View All Plants</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

