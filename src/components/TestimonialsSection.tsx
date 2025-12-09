import React from 'react'

const testimonials = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_q2T1UxvASv7It67a_VgkS0dKREtZFaBKPq6TQTM-cpieVPJ1Dz466qkctECXTd2_R008zoCm2ZkQLXjI390KIaFXJO34-aaRwGQWKTaPqO90bo9WXmncK0_qwfWuv6M0X4dpCsFCM-pjP1qr_zi8yGi-3ScuB_LfXDOlGNg7GdJwpPh9dH_QW5qDWad6k6LL_hofAPoEI13crgsyb68tWM03RY_XzKW4E2CI8AdxcacE2VM4grYhaSwrXGiW0oIwbJHVSiDYvI',
    name: 'Ananya Sharma',
    role: 'Home Gardener',
    quote: '"The plants I received were incredibly healthy and well-packaged. The guidance from their \'Edhi Yaaparam\' YouTube channel has been a game-changer for my balcony garden!"'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnBrDgGlBavAys05vXzv3IvIgIv8EfgM-uzea4qGqezNZOOkrxcYUomXS16JkybTlt2ekjBTuLTDtdmeRX20ZSh65rYus9Z4YVLo3PxbK2W6PCZs_yVzse0R5zHRcwk4VZ6YSCeg2UprKg7ZaKhTBeuh6z4SxwsiggemMq17LHx6qaYguKf2H-XsN5gKzmkRjNu1XRDv-9g3uOLT7MnawZQ2PosJvAB5JcSb89FTbBDJYtmHsQ-d0EInokR14VJM1XzKfYqKySRsA',
    name: 'Rohan Patel',
    role: 'Beginner Farmer',
    quote: '"Pavan Durga Nursery is more than just a nursery. Their honest farming tips helped me start my small vegetable farm with confidence. Highly recommended."'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHnuoyy4mOWGhwJDyBucSPWZJUMSxhhA7VG8milM15cNLAJSGOaIMCiiv9GhZar4hiFliNJ6xw6rUOkXgTrRq5AO-KPt58w-AFjN_4rYy2G_anQiZbg71RG2F2BVTbSah5BSGxyrqZfABUMHyG2ZAZWhFCtJum2JulZei_jokW3C96ySZJyVD38EmHmX9lvGMmv_-C6StRKYJ9gM5RKuxhRnKI8IuS77P7S_ShDLhznaoQKY5UogJzhROOdMBgagMf3Llu9B-RRhQ',
    name: 'Priya Singh',
    role: 'Plant Enthusiast',
    quote: '"I\'m in love with their special bonsai collection. Every plant is a piece of art, and their customer support is always ready to help with care instructions."'
  }
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-card-light dark:bg-card-dark py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col items-center gap-6 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark max-w-3xl">
              Success Stories from Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-lg md:text-xl text-subtle-light dark:text-subtle-dark max-w-2xl leading-relaxed">
              See how we've helped fellow plant lovers transform their spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group flex flex-col gap-6 rounded-2xl border border-border-light bg-background-light p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 dark:border-border-dark dark:bg-background-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
                      src={testimonial.image}
                    />
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-white dark:border-background-dark"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-text-light dark:text-text-dark">{testimonial.name}</p>
                    <p className="text-sm text-subtle-light dark:text-subtle-dark">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-light dark:text-text-dark leading-relaxed text-base italic relative pl-6">
                  <span className="absolute left-0 top-0 text-4xl text-primary/30 font-serif leading-none">"</span>
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
