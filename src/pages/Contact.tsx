import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <main className="container mx-auto px-6 py-12 md:py-20 flex-grow pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Form & Details */}
          <div className="flex flex-col gap-8">
            {/* Page Heading */}
            <div>
              <h1 className="text-gray-900 dark:text-white text-4xl lg:text-5xl font-black tracking-tighter">
                Get In Touch
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
                We'd love to hear from you. Fill out the form below or use our contact details to
                reach out.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <label className="flex flex-col">
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium pb-2">
                    Full Name
                  </p>
                  <input
                    className="form-input w-full rounded-lg text-gray-900 dark:text-white bg-background-light dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary/50 transition-colors px-4 py-2"
                    placeholder="Enter your full name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="flex flex-col">
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium pb-2">
                      Phone Number
                    </p>
                    <input
                      className="form-input w-full rounded-lg text-gray-900 dark:text-white bg-background-light dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary/50 transition-colors px-4 py-2"
                      placeholder="Enter your phone number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium pb-2">
                      Email Address
                    </p>
                    <input
                      className="form-input w-full rounded-lg text-gray-900 dark:text-white bg-background-light dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary/50 transition-colors px-4 py-2"
                      placeholder="Enter your email address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col">
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium pb-2">
                    Your Message
                  </p>
                  <textarea
                    className="form-textarea w-full rounded-lg text-gray-900 dark:text-white bg-background-light dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary/50 transition-colors min-h-36 px-4 py-2"
                    placeholder="Type your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button
                  className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    href="tel:+911234567890"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    href="mailto:contact@edhiyaaparam.com"
                  >
                    contact@edhiyaaparam.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map & Visit Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-gray-900 dark:text-white text-4xl lg:text-5xl font-black tracking-tighter">
                Visit Our Nursery
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
                Come see our collection in person. We are located in the heart of Hyderabad.
              </p>
            </div>

            {/* Map */}
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVZxkMrJtLxMU2abRkq1iUcDt0Qrnw6Iytq-2p7cI9_k5RfmpUqvvLt4xnsOZTupLdhBnVeghQ2PsqtBB2HiGxEv6B3qbZdOTHdIY_mzE6-aQaw3QB7xw7qsBU_0Dmz_w26AUypPz6Tu8sgLMxEbjuS8XADf52pBRNrW1I-N4xcTXAUNMAG16pONgKpGAflEm85dgLXa4lR2-WYDkH0FshJ7QeJT-JWWcnt01Ia1vI6FOwsOzqWia_8B8CvCGbzLrR9JpcjmyKpbE"
                alt="Map location of Edhi Yaaparam nursery in Hyderabad"
              />
            </div>

            {/* Visiting Hours */}
            <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <a
              className="bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity w-full text-center"
              href="#"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

