import React from 'react'
import { useNavigate } from 'react-router-dom'
import { allPlants } from '../data/plants'

export const OffersSection: React.FC = () => {
  const navigate = useNavigate()

  // Get some plants for offers
  const offerPlants = allPlants.slice(0, 3).map((plant, index) => {
    const price = parseInt(plant.price.replace('₹', '').replace(',', ''))
    const discount = [34, 24, 22][index] || 20
    const originalPrice = Math.round(price / (1 - discount / 100))
    return {
      ...plant,
      originalPrice,
      discountPrice: price,
      discount
    }
  })

  return (
    <section className="w-full py-12 md:py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-text-light dark:text-text-dark mb-2">
              Special Offers
            </h2>
            <p className="text-lg text-text-light/70 dark:text-text-dark/70">
              Special Deals for this Week
            </p>
          </div>
          <button
            onClick={() => navigate('/catalog')}
            className="hidden sm:flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
          >
            View All Collection
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerPlants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => navigate(`/product/${plant.id}`)}
              className="group cursor-pointer flex flex-col rounded-xl bg-white dark:bg-gray-800/50 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-border-light dark:border-border-dark"
            >
              <div className="relative">
                <div
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url("${plant.image}")` }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    Save {plant.discount}%
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-bold text-text-light dark:text-text-dark line-clamp-2">
                  {plant.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    ₹{plant.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-text-light/50 dark:text-text-dark/50 line-through">
                    ₹{plant.originalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/product/${plant.id}`)
                  }}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div
            onClick={() => navigate('/catalog')}
            className="group cursor-pointer flex items-center justify-center rounded-xl bg-primary text-white p-8 hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg"
          >
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl mb-4 block">shopping_bag</span>
              <p className="text-xl font-bold">View All</p>
              <p className="text-sm opacity-90">Collection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

