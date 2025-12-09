import React from 'react'

export const YouTubeSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-2xl group">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
              frameBorder="0"
              src="https://www.youtube.com/embed/QRfoIABkSNE"
              title="YouTube video player"
            />
          </div>
          <div className="flex flex-col items-start gap-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-5 py-2 text-sm font-semibold text-primary border border-primary/30">
              <span className="material-symbols-outlined text-lg">subscriptions</span>
              <span>150K+ Subscribers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
              Expert Tips on Our YouTube Channel{' '}
              <span className="gradient-text">"Edhi Yaaparam"</span>
            </h2>
            <p className="text-lg md:text-xl text-subtle-light dark:text-subtle-dark leading-relaxed">
              Join our community for weekly videos on plant care, gardening tips, and nursery tours. Learn from the experts and grow with us.
            </p>
            <a
              href="https://youtu.be/QRfoIABkSNE?si=KhBCyowLUAa1EfgN"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-background-dark transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">play_circle</span>
              <span>Watch on YouTube</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
