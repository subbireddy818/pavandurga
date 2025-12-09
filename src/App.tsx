import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { UnifiedHeader } from './components/UnifiedHeader'
import { HeroSection } from './components/HeroSection'
import { CategoriesSection } from './components/CategoriesSection'
import { FeaturedPlantsSection } from './components/FeaturedPlantsSection'
import { OffersSection } from './components/OffersSection'
import { YouTubeSection } from './components/YouTubeSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Catalog } from './pages/Catalog'
import { CatalogFooter } from './components/CatalogFooter'
import { About } from './pages/About'
import { AboutFooter } from './components/AboutFooter'
import { Contact } from './pages/Contact'
import { ContactFooter } from './components/ContactFooter'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'

function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark overflow-x-hidden">
      <UnifiedHeader />
      <main className="flex-grow w-full">
        <div className="pt-52">
          <CategoriesSection />
        </div>
        <HeroSection />
        <FeaturedPlantsSection />
        <OffersSection />
        <YouTubeSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

function CatalogPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark overflow-x-hidden">
      <UnifiedHeader showSearch={true} />
      <div className="pt-40">
        <Catalog />
      </div>
      <CatalogFooter />
      <WhatsAppButton />
    </div>
  )
}

function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark overflow-x-hidden">
      <UnifiedHeader />
      <div className="pt-52">
        <About />
      </div>
      <AboutFooter />
      <WhatsAppButton />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark overflow-x-hidden">
      <UnifiedHeader />
      <div className="pt-52">
        <Contact />
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
