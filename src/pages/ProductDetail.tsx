import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { allPlants } from '../data/plants'
import { useCart } from '../context/CartContext'
import { UnifiedHeader } from '../components/UnifiedHeader'

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const plant = allPlants.find(p => p.id === parseInt(id || '0'))

  if (!plant) {
    return (
      <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        <UnifiedHeader />
        <div className="pt-40 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Product Not Found</h2>
            <button
              onClick={() => navigate('/catalog')}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(plant)
    }
    navigate('/cart')
  }

  const price = parseInt(plant.price.replace('₹', '').replace(',', ''))

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <UnifiedHeader />
      <div className="pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full">
              <div
                className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url("${plant.image}")` }}
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-black text-text-light dark:text-text-dark mb-4">
                  {plant.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">₹{price.toLocaleString()}</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-border-light dark:border-border-dark">
                  <span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">Light Requirements</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{plant.light}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-border-light dark:border-border-dark">
                  <span className="material-symbols-outlined text-primary text-2xl">water_drop</span>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">Watering</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{plant.water}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-border-light dark:border-border-dark">
                  <span className="material-symbols-outlined text-primary text-2xl">eco</span>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">Special Feature</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{plant.feature}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-border-light dark:border-border-dark">
                  <span className="material-symbols-outlined text-primary text-2xl">category</span>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">Category</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{plant.category}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label className="font-semibold text-text-light dark:text-text-dark">Quantity:</label>
                <div className="flex items-center gap-2 border border-border-light dark:border-border-dark rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="px-4 py-2 font-semibold text-text-light dark:text-text-dark min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-gray-800 border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/10 transition-all">
                  <svg
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  WhatsApp Enquiry
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-bold text-lg text-text-light dark:text-text-dark mb-3">
                  Why Choose This Plant?
                </h3>
                <ul className="space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>Healthy, nursery-grown plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>Expert care instructions included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>Secure packaging for safe delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>24/7 expert support available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

