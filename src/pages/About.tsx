import React from 'react'

export const About: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <main className="flex-grow pt-0">
        {/* Header Image */}
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 35%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEZblw6tq4y0RcggIYTAzjlG9O-hGjTlUslz5uwyR0dLvjkNBkFS5BndyG_aOZH5nwbf-gE6V-RscELdPUHJ5hpuqKAdBJ4_dSZMK-yRNCwzwbNsInLA_HPE4LpH98qN27KaaavI7ceM1U0X5pqwMHnkqv6vaGXE0ppgcZZ_hOyCcn8US8exbuzqN-JMtv_RXwd5vFYDYiJVpEi5PcTNLZOSu2L3zRaJgfDNE7V1LBfshNFzyvQsKe00cD4k43s7a-pziwQdFhILY")`
              }}
            >
              <div className="p-6 md:p-10">
                <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                  About Edhi Yaaparam
                </h1>
                <p className="text-white/90 mt-2 text-lg md:text-xl max-w-2xl">
                  From a Passion Project to a Community of 150,000+ Plant Lovers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Story – Edhi Yaaparam
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                From a humble passion project to a thriving community of over 150,000 plant lovers,
                our journey has been a story of growth, learning, and connection. It all started
                with a single seed of an idea: to share the joy of gardening through our YouTube
                channel.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                What began in a small corner of Hyderabad has blossomed into a full-fledged nursery
                and a digital haven for enthusiasts across India. Achieving the 150K subscriber
                milestone wasn't just a number for us; it was a testament to the beautiful
                community we've nurtured together.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="relative flex items-center justify-center bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE-Dr-mulzxeuWKNF53B8lA7pq8ILKn8LkEzOCNzF0XO1Wt6aDc2pDOUBAmNUNngP5WBVuQZK22sfnz-bAtepsOTWAYn6Nn3qxAS-vL_AQGfAjZOL_RNdXpO8D8OQN3gnA-YdE4bNYxf79H-sIts43di5ozBgh43r8zwVOfCPmXo--2f5SH-hs5IP_tSxemwLWm74Va292DcmGmg7nrw1W9vPjaqC_d6pL-0aGV2Lg7ZJ5A2WIWKGVvVBIbvKfq-ckJkVeQqvnbjs")`
                }}
              >
                <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-110">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white/50 dark:bg-black/20 px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Helping India Grow Greener
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Our mission is simple: to inspire and empower everyone to bring a piece of nature
              into their homes. We believe that plants have the power to transform spaces, improve
              well-being, and connect us back to the earth.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Mission Card 1 */}
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-3xl">spa</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Quality Plants
                </h3>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  We meticulously source and nurture a diverse range of healthy, high-quality
                  plants, ensuring every green friend you take home is ready to thrive.
                </p>
              </div>

              {/* Mission Card 2 */}
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Expert Guidance
                </h3>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  Through our YouTube channel and in-person advice, we provide clear, practical
                  guidance to help gardeners of all levels succeed.
                </p>
              </div>

              {/* Mission Card 3 */}
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Community Building
                </h3>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  We foster a welcoming community where plant lovers can connect, share their
                  experiences, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Our Journey in Pictures
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl aspect-square">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxyQVKwY18-W4dspjDUWgO7J4x040kY1OcqbU8P2ju9YIjJPXO3i3VvvkIaKvhDdyQphhUNVjRRuVrs9hUSd1WWVP7xYBMh0jtENIPoIxl82saRei3enSo3YExPK2MkXI8hJia_PXZ4BbZ-8mzfcyMDja6aku6keadnlSH2brEEFxwodqQsRP5NJnAHRLWEN2UcP8o2xnT-iP7zFvp2UPQUIf1KmV4F2Etdeyd8nQv8RH4EcUC3Rs0gu2BK6bsXK-y-g8HzexhQ8"
                  alt="Close-up of a new sprout in soil"
                />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square col-span-2">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6zOegRoxqGMOO94IdisxmWi55jNwvmvh7pfPjq4zxhFBDc2VhlGDdXLZ5EBBfd363hx00fwoAyELBmRYhT1e6KOtv-w0KSls3Ok7NeDc9y7hpBV0U9_GA4mBp_KaE7NGphgneu_J_MuijscZqXa5QgVyb54YGZFgquROjUFnkz26GfDeuLCTwKVcvFZ94EQ7qhvBy7Q193-fxF4tGSt5DuFVBtV89jp6vH4JLFbEZmk-JE29-tkBvTdlT9VFXia1CuYYlM74ud6g"
                  alt="Wide shot of the nursery with rows of plants"
                />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA159VZLQ6hjAZHHGxc4hsiNiniHHBp8OX770lDhg5eYqyOUW3238Tp8nGIv2EdOgGD5vSpf-Uj0AuMnl_I_2sc-tJPV-KPhhddnLJ_NrbFMGcupR7qYw7XbbMtvFxoTnb9WdGu4OI9iqp4emM0Ozrr5gcyK2eqRwS1ClP0AKEwsVfHdS0sryoHAA9Yoljqis40cwP4oPx0elEcvymoW-swZORwJbqYZEiUB9Gs9fx3bF1o8qj51RY_kg5ep80uDMkmC9jIyT5Wx7M"
                  alt="A community event at the nursery"
                />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square col-span-2">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3U8L38EfcxcPH3rfCQcaygqeOOxeN1TrSmosXwoClvueO84ijt6uF4W51qmWFEWi6-Pckf-U4szCBa-DLFLg8cGVUtS9oZFADXZuMv8AbdLC9dtvWsO1p9SE_qTeuy0NJoEMUNz1HvLBOj6Px45pVCjgke2IX5UvSRs8t4QecWLMRi8_qZvh0I6rDuEsrMK_UXMbjE-GhVQOLe-LbVUtwJpFdRVz2EjRFNJX9idATwPXJp4Gabte5RNwLaj01Mi12U6pvr1gtCCU"
                  alt="A person potting a plant"
                />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkP03LUOlYFMJqKIvomczAG1VsWjvQ3sZCHDHSc4ynxjl-MvEjJ-sUpFICcghvEjU8tFViPdByIarwbamNubsi_sjj5GIRkTzETobpZAZMAWU_s1lb0sLNYfWyNKR2K4v0SN5EdlqO-4VLvkGjlcZeptagrEMO-QpGHapf78GSHRI5QOQ3j1ob9TiCgtBrC4CJ7TAorIzENbgPN-rYWwxCfJpJuLx6RRPPYKE_1LPYWCtenlTFIcamjPGMt2L4lHDygwUDLgdBLts"
                  alt="Detailed shot of vibrant green leaves"
                />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square">
                <img
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7GbR9r0wd_z1gTcCS_rhaZcS9RvXSbBwZFmNsEECD9uhf6IpaDB2whz-BcvceWXtALDiYcu7vMe9l-tdC_ScEJRm7dcSi1NvQy9nRaZ4hSoySsH2J_oikm_Tb9cA9OZ-E6Emfxc_oK4c1MWk5YvOpxcA4SLo6THgXjqQPzU7NKqLZPLshIIMWUpRqZ-X4ZQ46qeLfr-OdFJ6h3vpbCVUyE9E4q6qeCpoRoqoHSK2GtDUZDh-DLdT5EDGXY5ridbNTOjMvYKUzGc"
                  alt="A member of the team smiling"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

