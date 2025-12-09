import React from 'react'
import { useNavigate } from 'react-router-dom'

const categories = [
  {
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=%',
    title: 'OFFERS',
    category: 'offers'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFFkqe9yFWsC4nKh39EiFBLOy0aXLX7SNjCyONv-3nszNjEZY1L66fDJZvjYAeMipedzU1Mnf-YjZAg9UY8TxM6uPA0lzsM6LCpd6U5c5M1bpaXyWNE_GhkERXscY5DbvtWcCGwstSLQVhLqH-u4CBNPPL-k57NQ-24PoG-TNWyVJCExHH4_WEwAlKHzb3IBu3mRVRz_HSwZFdBgBebxpgtabV2_K1NaF1hfXcYHp5Wl8OlDzrOaDe1MPaQRoYNpWcWk5oG2zU6fQ',
    title: 'GARDENING',
    category: 'gardening'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfTsTIJiWyvTDyVeTDl9yETIrRN9Ujww2BOpZH3gVhAJJk4jXRnYQG4Dc-yrY0ulCyXeOe2p4lFZY9932F27Xlz9TV-FwKd3HeyiFw1CBK9LUg47SJwTyfLG3FPos9NWd5Q0ethWEwYochtloHwjKpWlXyttgR7eR4Ey6a6id50briGEX6xLWfO0Xc4Yi37Nw_aMaRofmCTek2_P4vaR8UfEcrLLJyBmVHz8UZ4kWMeDyAWNguFvrfhcVsaQkBH8zXIKR0oSh55eA',
    title: 'PLANTS',
    category: 'plants'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApn9LNx5GeLszAY9vmktnrBCGkWG9y36I1x8g-NveFxbATWCv5tc2TnVm2oHI_R9xiJyfaI7ouVqEf7pen3hzBv-FBZ1aILWiP60sn9f_Fj7z-KUXJdB4h1NM4v-X66GWUCO93I8HiTJ-pvNtHYCcXMmsst4xivD3runZyKxy5H_1fq1ECGkR2pft5zSmaXyXS7PQUvyPkr5M3Vk4ZFHcDGZ3ry1RqQJ2FB8QPlL3oDmWpFRRX1xYtwwhkvIVgQ-DCOVejMZ0UUvs',
    title: 'SEEDS',
    category: 'seeds'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjF3jIPC3B40V1DzfBTP_KT0oj3k6G78GUHjLXIuvKFdS_aXgs3QnnW9H6PYcTCry5QsPCEwoDNoLk1-R5Z2soN5CGlH-BS3bQH2jazJXn6HdOesF1G-BAvD04OtQTzy0Dqnk_qftOsU2_AmzxEKOEb4Omx7AJxMeUEEfA1rkHRmj20_n6JUZ9yQdPYNY4bCkl06GCqrNEmxVNhbNlbrBtQtamPMbTFMTEFonEwYWxfRB9lomVbWtA8dT4UksP7bMqAjm4bfvpKvg',
    title: 'BULBS',
    category: 'bulbs'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTbUktTjmFdsOZycleZsbh4Dz1K2jbHtVfRmdUrVKQKpI2M25CAgcShzDEHY3BeQ9pAZDVtx73Mo6RP6shevP60l6NgnxSJuD3HzlYbcoKGIc-QUwCjmLU_1soyTy7i37kdHETnoYT-Plu82mO8wOC2dF7bs2EwJ8duR5OlcEPlkNOUKSwZ2eSL15DbVw1XQcSqsRL9-7BiWSd1ZpWjc_RIXX_Fxitn5Uz1QKwGuRPX-oiJUnazxIseGInMQdeHHHvpy63WxiTtus',
    title: 'POTS',
    category: 'planters'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbO-u63aEOkABDIGxzjZPGm0VkhN7_bqIoBs-0XQa-Tav4QjClKpAMNzACJS-tgTYrj4qWFcdTSw_m7RCabyMHzbDzV9vPNx0xN2qpiwG5YA-k99QvHM1kaHI2UpgtsXFBGXBCTCy0ffzmpgz8Xf9J47DRDqHhJYaG9WiSVicypO5x5iXUvQujepyYaTh5qZWIyLJnYcWOGxo7VXAQLFlTssF4mCxVZ8Mfj92PNRwpBqigYqGn7n2_rkfrbzNHSmhJglzflYXNvEI',
    title: 'FERTILIZERS',
    category: 'soil'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFFkqe9yFWsC4nKh39EiFBLOy0aXLX7SNjCyONv-3nszNjEZY1L66fDJZvjYAeMipedzU1Mnf-YjZAg9UY8TxM6uPA0lzsM6LCpd6U5c5M1bpaXyWNE_GhkERXscY5DbvtWcCGwstSLQVhLqH-u4CBNPPL-k57NQ-24PoG-TNWyVJCExHH4_WEwAlKHzb3IBu3mRVRz_HSwZFdBgBebxpgtabV2_K1NaF1hfXcYHp5Wl8OlDzrOaDe1MPaQRoYNpWcWk5oG2zU6fQ',
    title: 'CORPORATE',
    category: 'corporate'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfTsTIJiWyvTDyVeTDl9yETIrRN9Ujww2BOpZH3gVhAJJk4jXRnYQG4Dc-yrY0ulCyXeOe2p4lFZY9932F27Xlz9TV-FwKd3HeyiFw1CBK9LUg47SJwTyfLG3FPos9NWd5Q0ethWEwYochtloHwjKpWlXyttgR7eR4Ey6a6id50briGEX6xLWfO0Xc4Yi37Nw_aMaRofmCTek2_P4vaR8UfEcrLLJyBmVHz8UZ4kWMeDyAWNguFvrfhcVsaQkBH8zXIKR0oSh55eA',
    title: 'PEBBLES',
    category: 'pebbles'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApn9LNx5GeLszAY9vmktnrBCGkWG9y36I1x8g-NveFxbATWCv5tc2TnVm2oHI_R9xiJyfaI7ouVqEf7pen3hzBv-FBZ1aILWiP60sn9f_Fj7z-KUXJdB4h1NM4v-X66GWUCO93I8HiTJ-pvNtHYCcXMmsst4xivD3runZyKxy5H_1fq1ECGkR2pft5zSmaXyXS7PQUvyPkr5M3Vk4ZFHcDGZ3ry1RqQJ2FB8QPlL3oDmWpFRRX1xYtwwhkvIVgQ-DCOVejMZ0UUvs',
    title: 'ACCESSORIES',
    category: 'accessories'
  }
]

export const CategoriesSection: React.FC = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: typeof categories[0]) => {
    if (category.category === 'offers') {
      navigate('/catalog?category=offers')
    } else {
      navigate(`/catalog?category=${category.category}`)
    }
  }

  return (
    <section className="w-full bg-card-light dark:bg-card-dark py-8 md:py-12">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide justify-center">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0"
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${category.title === 'OFFERS' ? 'bg-red-600 flex items-center justify-center' : ''}`}>
                  {category.title === 'OFFERS' ? (
                    <span className="text-white text-3xl md:text-4xl font-bold">%</span>
                  ) : (
                    <div 
                      className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url("${category.image}")` }}
                    />
                  )}
                </div>
                <p className="text-xs md:text-sm font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors text-center whitespace-nowrap">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
