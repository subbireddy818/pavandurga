import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { allPlants, Plant } from '../data/plants'
import { useCart } from '../context/CartContext'

interface UnifiedHeaderProps {
  showSearch?: boolean
  onSearchChange?: (query: string) => void
}

export const UnifiedHeader: React.FC<UnifiedHeaderProps> = ({ showSearch = false, onSearchChange }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { getTotalItems } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [showCategoryBar, setShowCategoryBar] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Plant[]>([])
  const [isCategoryOpen, setIsCategoryOpen] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const cartItemCount = getTotalItems()
  const isCatalogPage = location.pathname === '/catalog' || location.pathname.startsWith('/product')

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      // Hide top bar when scrolling down, show when scrolling up or at top
      setShowTopBar(currentScrollY <= 20 || currentScrollY < lastScrollY)
      // Hide category bar when scrolling down, show when scrolling up or at top
      setShowCategoryBar(currentScrollY <= 20 || currentScrollY < lastScrollY)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allPlants.filter(plant =>
        plant.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      setTimeout(() => inputRef.current?.focus(), 100)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isSearchOpen])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (onSearchChange) {
      onSearchChange(value)
    }
    if (showSearch) {
      window.dispatchEvent(new CustomEvent('catalog-search', { detail: value }))
    }
  }

  const handlePlantClick = (plant: Plant) => {
    setIsSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
    navigate('/catalog', { state: { searchQuery: plant.name } })
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      navigate('/catalog', { state: { searchQuery } })
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const categories = [
    { name: 'Gardening', path: '/catalog?category=gardening' },
    { name: 'Plants', path: '/catalog?category=plants' },
    { name: 'Seeds', path: '/catalog?category=seeds' },
    { name: 'Bulbs', path: '/catalog?category=bulbs' },
    { name: 'Planters', path: '/catalog?category=planters' },
    { name: 'Soil & Fertilizer', path: '/catalog?category=soil' },
    { name: 'Gifts', path: '/catalog?category=gifts' },
    { name: 'Pebbles', path: '/catalog?category=pebbles' },
    { name: 'Accessories', path: '/catalog?category=accessories' },
    { name: 'Corporate Gifting', path: '/catalog?category=corporate' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 navbar-blur ${
        isScrolled
          ? 'border-b border-border-light/30 dark:border-border-dark/30 shadow-lg shadow-black/10'
          : 'border-b border-border-light/20 dark:border-border-dark/20'
      }`}
    >
      {/* Top Navigation Bar */}
      <div className={`w-full bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 transition-all duration-300 overflow-hidden ${showTopBar ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'} hidden md:block`}>
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm">
          {/* Social Media Icons (Left) */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.084 0 9.426-3.163 11.177-7.618-.15-.83-.223-1.75-.15-2.75.15-1.25.975-2.75 2.1-3.75 1.875-2.25 2.1-3.75 1.5-5.5-.675-2-2.475-3-4.35-2.25-1.65.675-2.85 2.25-3.3 3.75-.45 1.5-.3 3 .225 4.125-.675-.075-1.35-.45-1.875-1.125-.675-1.125-.675-2.625.075-4.125.675-1.35 1.875-2.475 3.225-2.85 1.575-.45 3.15-.15 4.35.975 1.275 1.2 1.875 2.85 1.65 4.5-.15 1.125-.6 2.1-1.275 2.85-.45.6-.3 1.35.225 1.8.45.375 1.05.45 1.575.225 1.05-.45 1.95-1.2 2.55-2.1.675-1.05.975-2.25.975-3.45 0-3-1.725-5.625-4.65-6.75-2.7-1.05-5.85-.45-7.875 1.5-1.8 1.725-2.55 4.5-1.875 7.125.45 1.725 1.5 3.15 2.85 4.05.3.225.375.6.225.9-.075.15-.225.3-.45.375-.45.225-.975.3-1.5.225C2.7 19.65 1.5 16.05 2.025 12.6c.6-4.05 3.9-7.2 7.95-7.8 4.05-.6 8.1 1.35 10.05 4.8 1.35 2.4 1.5 5.25.45 7.8-.9 2.1-2.7 3.75-4.8 4.65-1.05.45-2.1.675-3.15.675z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          {/* Right Links */}
          <div className="flex items-center gap-6">
            <Link to="/rewards" className="text-primary font-semibold hover:underline">Rewards</Link>
            <Link to="/help" className="text-white/80 hover:text-white transition-colors">Help</Link>
            <Link to="/orders" className="text-white/80 hover:text-white transition-colors">My Orders</Link>
            <Link to="/offers" className="text-white/80 hover:text-white transition-colors">Offers</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop Layout: Single Row */}
        <div className="hidden md:flex items-center justify-between whitespace-nowrap">
          {/* Logo */}
          <div
            className="flex items-center text-text-light dark:text-text-dark group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
              <span className="text-primary">pavandurganursery</span>
              <span className="text-text-light dark:text-text-dark">.com</span>
            </h2>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex mx-4 sm:mx-8 relative items-center gap-0 flex-1 max-w-2xl" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-0 w-full">
            <div className="border border-gray-300 focus-within:border-primary transition-colors bg-white dark:bg-gray-800/50 shadow-sm flex items-center flex-1">
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent text-text-light dark:text-text-dark placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 focus:outline-none text-sm sm:text-base h-10 sm:h-12 px-3 sm:px-5"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchOpen(true)}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white hover:bg-primary/90 transition-colors font-medium flex items-center justify-center flex-shrink-0 h-10 sm:h-12 w-10 sm:w-12"
            >
              <span className="material-symbols-outlined text-lg">search</span>
            </button>
          </form>

            {/* Search Results Dropdown */}
            {isSearchOpen && (searchResults.length > 0 || searchQuery.trim().length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-[500px] overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="max-h-[400px] overflow-y-auto">
                    {searchResults.map((plant) => (
                      <button
                        key={plant.id}
                        onClick={() => handlePlantClick(plant)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-background-light dark:hover:bg-gray-700 transition-colors text-left border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-text-light dark:text-text-dark truncate">
                            {plant.name}
                          </p>
                          <p className="text-xs text-text-light/60 dark:text-text-dark/60">{plant.price}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : searchQuery.trim().length > 0 ? (
                  <div className="p-4 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                    No plants found matching "{searchQuery}"
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                    Start typing to search for plants...
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Icons - Desktop */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/10 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors text-sm">
              <span className="material-symbols-outlined text-base">person</span>
              <span className="hidden lg:inline">Login</span>
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors relative"
            >
              <span className="material-symbols-outlined text-lg">shopping_cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-white text-xs font-bold">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Layout: Two Rows */}
        <div className="md:hidden">
          {/* Top Row: Menu, Logo, and Icons */}
          <div className="flex items-center justify-between whitespace-nowrap mb-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Logo */}
            <div
              className="flex items-center text-text-light dark:text-text-dark group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                <span className="text-primary">pavandurganursery</span>
                <span className="text-text-light dark:text-text-dark hidden sm:inline">.com</span>
              </h2>
            </div>

            {/* Right Icons - Mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/cart')}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors relative"
              >
                <span className="material-symbols-outlined text-lg">shopping_cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-white text-xs font-bold">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Always Visible on Mobile */}
          <div className="flex relative items-center gap-0 w-full" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-0 w-full">
              <div className="border border-gray-300 focus-within:border-primary transition-colors bg-white dark:bg-gray-800/50 shadow-sm flex items-center flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full bg-transparent text-text-light dark:text-text-dark placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 focus:outline-none text-sm h-10 px-3"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchOpen(true)}
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 transition-colors font-medium flex items-center justify-center flex-shrink-0 h-10 w-10"
              >
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
            </form>

            {/* Mobile Search Results Dropdown */}
            {isSearchOpen && (searchResults.length > 0 || searchQuery.trim().length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-[400px] overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="max-h-[350px] overflow-y-auto">
                    {searchResults.map((plant) => (
                      <button
                        key={plant.id}
                        onClick={() => handlePlantClick(plant)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-background-light dark:hover:bg-gray-700 transition-colors text-left border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-text-light dark:text-text-dark truncate">
                            {plant.name}
                          </p>
                          <p className="text-xs text-text-light/60 dark:text-text-dark/60">{plant.price}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : searchQuery.trim().length > 0 ? (
                  <div className="p-4 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                    No plants found matching "{searchQuery}"
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-text-light/60 dark:text-text-dark/60">
                    Start typing to search for plants...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/rewards"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              Rewards
            </Link>
            <Link
              to="/help"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              Help
            </Link>
            <Link
              to="/orders"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              My Orders
            </Link>
            <Link
              to="/offers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              Offers
            </Link>
            <button
              onClick={() => {
                navigate('/cart')
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center gap-2 py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center gap-2 py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">person</span>
              Login
            </button>
          </div>
        </div>
      )}

      {/* Category Navigation Menu */}
      {!isCatalogPage && (
        <div className={`w-full bg-background-light/95 dark:bg-background-dark/95 border-t border-border-light/20 dark:border-border-dark/20 transition-all duration-300 overflow-hidden ${showCategoryBar ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'} hidden md:block`}>
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-2">
              {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setIsCategoryOpen(category.name)}
                onMouseLeave={() => setIsCategoryOpen(null)}
              >
                <Link
                  to={category.path}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
                >
                  {category.name}
                  <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
                </Link>
                {isCategoryOpen === category.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <Link
                      to={`${category.path}&sub=all`}
                      className="block px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-gray-700 transition-colors"
                    >
                      All {category.name}
                    </Link>
                    <Link
                      to={`${category.path}&sub=popular`}
                      className="block px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-gray-700 transition-colors"
                    >
                      Popular
                    </Link>
                    <Link
                      to={`${category.path}&sub=new`}
                      className="block px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-gray-700 transition-colors"
                    >
                      New Arrivals
                    </Link>
                  </div>
                )}
              </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Category Menu */}
      {!isCatalogPage && isMobileMenuOpen && (
        <div className="md:hidden w-full bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
          <div className="px-4 py-4">
            <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
