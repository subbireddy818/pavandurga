import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center">
      <div 
        className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-cover bg-center bg-no-repeat p-6 sm:p-8 md:p-12 text-center overflow-hidden group w-full min-h-[400px] sm:min-h-[500px] md:min-h-[563.67px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Q333co9VwrfbsUu2UzDWDVbnyNv2UYS01qbMu1D59MrXkaHTP0FBqZ5TReUAJ3mr4FxpbH_oSP6lLLZVl9FgiV9JHuLwNFQggP8SjlhKPNa3tZ8J5AphioW7bLnPrKEw1RLg2n1ckfcpR8gH29Dn0UwlfdKt-REb5qsHUqEWU8TQZLCrQFUuuTwLqzzXovU580t15nMtwub71v_P5zQpT7s07dNFnQC4upHCwdt6unQHyxL8wk8ZvLeY_8qTuRzatj9UeHNBpRo")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10 flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-2xl">
            Pavan Durga Nursery – Trusted by{' '}
            <span className="text-primary">150,000+</span> Plant Lovers
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Premium Nursery Plants, Expert Guidance, and Honest Farming Tips.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 px-4 w-full sm:w-auto">
          <button className="group flex h-12 sm:h-14 w-full sm:w-auto sm:min-w-[160px] sm:max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 sm:px-8 text-sm sm:text-base font-bold text-background-dark transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
            <span className="truncate">Explore Plants</span>
            <span className="material-symbols-outlined text-lg sm:text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
          <button className="group flex h-12 sm:h-14 w-full sm:w-auto sm:min-w-[160px] sm:max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm px-6 sm:px-8 text-sm sm:text-base font-bold text-text-light transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl dark:bg-background-dark/95 dark:text-text-dark dark:hover:bg-background-dark">
            <span className="truncate">WhatsApp Order</span>
            <span className="material-symbols-outlined text-lg sm:text-xl transition-transform group-hover:translate-x-1">chat</span>
          </button>
        </div>
      </div>
    </section>
  )
}
