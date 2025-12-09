import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card-dark text-text-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-6 lg:px-8 py-16 md:grid-cols-4 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">potted_plant</span>
            <h2 className="text-xl font-bold">Pavan Durga Nursery</h2>
          </div>
          <p className="text-sm text-subtle-dark leading-relaxed">Your trusted partner in gardening, from our nursery to your home.</p>
          <div className="flex gap-4">
            <a className="text-subtle-dark hover:text-primary transition-colors duration-300 hover:scale-110 transform" href="#">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" fillRule="evenodd" />
              </svg>
            </a>
            <a className="text-subtle-dark hover:text-primary transition-colors duration-300 hover:scale-110 transform" href="#">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM8.451 16.949a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-.08-6.912a3.5 3.5 0 11-6.912 0 3.5 3.5 0 016.912 0z" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="#">Shop</a>
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="#">Our Story</a>
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="#">YouTube</a>
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="#">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-subtle-dark">Hyderabad, India</p>
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="mailto:info@pavandurganursery.com">info@pavandurganursery.com</a>
            <a className="text-sm text-subtle-dark hover:text-primary transition-colors duration-200 w-fit" href="tel:+911234567890">+91 12345 67890</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg">Business Hours</h3>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-subtle-dark">Monday - Saturday: 9 AM - 6 PM</p>
            <p className="text-sm text-subtle-dark">Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-sm text-subtle-dark">
          <p>© 2024 Pavan Durga Nursery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
