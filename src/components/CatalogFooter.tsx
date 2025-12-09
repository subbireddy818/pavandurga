import React from 'react'

export const CatalogFooter: React.FC = () => {
  return (
    <footer className="bg-primary/10 dark:bg-primary/5 border-t border-primary/20 dark:border-primary/10 mt-12 px-10 py-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg text-[#0d1b12] dark:text-gray-100 mb-2">Edhi Yaaparam</h3>
          <p className="text-sm text-[#4c9a66] dark:text-gray-400">
            Your one-stop shop for healthy, beautiful plants in Hyderabad.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              className="text-[#0d1b12] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a
              className="text-[#0d1b12] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#0d1b12] dark:text-gray-100 mb-2">Our Location</h3>
          <p className="text-sm text-[#4c9a66] dark:text-gray-400">Hyderabad, India</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#0d1b12] dark:text-gray-100 mb-2">Business Hours</h3>
          <p className="text-sm text-[#4c9a66] dark:text-gray-400">Mon - Sat: 9 AM - 6 PM</p>
        </div>
      </div>
      <div className="text-center text-xs text-[#4c9a66] dark:text-gray-500 mt-8 pt-8 border-t border-primary/20 dark:border-primary/10">
        <p>© 2024 Edhi Yaaparam. All rights reserved.</p>
      </div>
    </footer>
  )
}

