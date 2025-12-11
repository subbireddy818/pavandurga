import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { allPlants } from '../data/plants'
import { useCart } from '../context/CartContext'

const plants = allPlants
const categories = ['All', 'Indoor', 'Outdoor', 'Flowering', 'Succulents', 'Herbs']

export const Catalog: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Get search query from navigation state
  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery)
      setCurrentPage(1)
    }
  }, [location.state])

  // Listen for search from header
  useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      setSearchQuery(customEvent.detail || '')
      setCurrentPage(1)
    }
    window.addEventListener('catalog-search', handleSearch)
    return () => window.removeEventListener('catalog-search', handleSearch)
  }, [])

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPlants = filteredPlants.slice(startIndex, startIndex + itemsPerPage)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-8">
        <div className="flex flex-col w-full max-w-[1280px] flex-1">
          <main className="flex-grow">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 sm:p-6 md:p-8">
              <h1 className="text-[#0d1b12] dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Our Plant Collection
              </h1>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 p-4 sm:p-6 md:p-8 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-primary/20 dark:bg-primary/10 text-[#0d1b12] dark:text-gray-200 hover:bg-primary/30 dark:hover:bg-primary/20'
                  }`}
                >
                  <p className="text-sm font-medium leading-normal">{category}</p>
                </button>
              ))}
            </div>

            {/* Plant Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 p-2 sm:p-4 md:p-6 lg:p-8">
              {paginatedPlants.length > 0 ? (
                paginatedPlants.map((plant) => (
                  <div
                    key={plant.id}
                    onClick={() => navigate(`/product/${plant.id}`)}
                    className="flex flex-col gap-2 sm:gap-3 lg:gap-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/20 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square sm:aspect-[4/3] bg-cover"
                      style={{ backgroundImage: `url("${plant.image}")` }}
                    />
                    <div className="p-2 sm:p-3 lg:p-4 flex flex-col gap-2 sm:gap-3 lg:gap-4">
                      <p className="text-[#0d1b12] dark:text-gray-100 text-xs sm:text-sm lg:text-lg font-bold leading-tight sm:leading-normal line-clamp-2">
                        {plant.name}
                      </p>
                      <div className="hidden sm:flex flex-col gap-1 sm:gap-2 text-[#4c9a66] dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="material-symbols-outlined text-xs sm:text-base">light_mode</span>
                          <span className="truncate">{plant.light}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="material-symbols-outlined text-xs sm:text-base">water_drop</span>
                          <span className="truncate">{plant.water}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="material-symbols-outlined text-xs sm:text-base">eco</span>
                          <span className="truncate">{plant.feature}</span>
                        </div>
                      </div>
                      <p className="text-[#0d1b12] dark:text-gray-300 text-sm sm:text-base font-semibold leading-normal">
                        {plant.price}
                      </p>
                      <div className="flex gap-1 sm:gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            addToCart(plant)
                          }}
                          className="flex-1 h-8 sm:h-9 lg:h-10 flex items-center justify-center gap-1 sm:gap-2 rounded-md sm:rounded-lg bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm sm:text-base">shopping_cart</span>
                          <span className="hidden sm:inline">Add to Cart</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/product/${plant.id}`)
                          }}
                          className="px-2 sm:px-4 h-8 sm:h-9 lg:h-10 flex items-center justify-center rounded-md sm:rounded-lg border-2 border-primary text-primary font-semibold text-xs sm:text-sm hover:bg-primary/10 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm sm:text-base">visibility</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-[#0d1b12] dark:text-gray-200 text-lg">No plants found matching your search.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="flex size-10 items-center justify-center disabled:opacity-50 hover:bg-primary/10 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
                        currentPage === page
                          ? 'text-white bg-primary font-bold'
                          : 'text-[#0d1b12] dark:text-gray-200 hover:bg-primary/20'
                      }`}
                    >
                      {page}
                    </button>
                  )
                })}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="flex size-10 items-center justify-center disabled:opacity-50 hover:bg-primary/10 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
