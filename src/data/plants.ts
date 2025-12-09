export interface Plant {
  id: number
  name: string
  image: string
  price: string
  light: string
  water: string
  feature: string
  category: string
}

export const allPlants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXxukrBjcQ3CneTcP6ae97F9SAQ3B7q46pK8MeVqQQgaf-5qoZh8yNHiQbNx7w6prA1P59Joy7jYMHiIWnCHf79ulR5piJPg0ZmNWebnDHifCxWaS_JGG2sTdxSbZHHhTsO2qOZPH8NNO7ZSi3Oq_ypiG6aWV8OfWZYnBFvb1AyQm0AfPFSALfImF9HWod_nhlK71oFVBFDk7Qt-VPIFFK0QTPK6CqP-22j-8agK6KoGVFU4JuXyrPPsUfJsNuE1uxPYqCcFgbelc',
    price: '₹800',
    light: 'Bright, indirect light',
    water: 'Water weekly',
    feature: 'Air-purifying',
    category: 'Indoor'
  },
  {
    id: 2,
    name: 'Snake Plant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA33nUKg1akT52Vk0G9iheUexAyzz_fWRDkRx86tVmMR6LiJe01IW4d8N0e1xBKqvYzjSuIv9BWUmwW02APjId4_Cnmn9LPdkz1mLrRVlEs48DtXo8zoWLjEAaSYrasLbbXX4CLF2xmI00K4Lxw3mgue37QNgFpvEgPxQ-hm2st5FW-yVs4g40d5fgXewq7M0v0QByXZgwNrvAk72HqjR0pED3Nq1-2vQQTaaZse6TYd6MF4Thtb0hpyuBlBU85zGs5CiX5RFWNMcc',
    price: '₹600',
    light: 'Low light',
    water: 'Water every 2-3 weeks',
    feature: 'Highly durable',
    category: 'Indoor'
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-NMqTfoMDAfigk0Hcz8BChWldRTrQt9ha7NoA0PcV3vf7PCYxlt44LTQ4dZJvhOMStYbhGLlYjE9W-Yew1jLOZmLpPNwer2UQE1meMRd10_9eUQmSce9RVnNvNkfN2GprPhmgdmNBrwdoYciR-FloaV73apiLyPopQuQDo0kAqIZdMP0F_MM91_ONoaLVTrE8NNYRe9hmIhtLLrHuUUV5iVHkSTPwYumWqQQiKNWdBkZ-XxHUtp1tqgeCqSt9gUNAj5SB8DY-KIQ',
    price: '₹1200',
    light: 'Bright, filtered light',
    water: 'Water when top soil is dry',
    feature: 'Statement plant',
    category: 'Indoor'
  },
  {
    id: 4,
    name: 'ZZ Plant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc4DBBnKeZPmOeRW6YCihWKviF6SeX-yR247BzzOmScUiJY5JiQnYWqZcgiYxhp5hJGj8VfTn5go5Zwsw1MVBys6vMdDW8IPb5sCSPd-RPi4Sdx8flMGQt5f1q1t1mq3_ul3ebge-D23J8mrXJJ5R4huSBNe4gq1kKKDRVamij1GqcQQatz2WmKsgVYobkiHXtozpXSNu8XLLb9eeHszNeB7cktGDdryOuaSdlZ75FWko7z5Ug-8zdmSmxVzH-o_got9P8bnrpuF8',
    price: '₹750',
    light: 'Low light',
    water: 'Drought tolerant',
    feature: 'Beginner friendly',
    category: 'Indoor'
  },
  {
    id: 5,
    name: 'Pothos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD6_aOazkIPLGl4Q5QBKVCN_-bD2BHCXAI0O5jlm0jKjUWM86_iKPRZHAM6bIPnTRtCy5ygWUWvB64Qk2c-ArM83t3D7qbebbmguxIMeG8R7jGn93s1pbzuuQGGryL83ta5TcimqnhChqbGXOAjjYoWpeLItXP2D-psI8idPFFBr6jOt7uZ-v2uQZmjet0Sbp5-2dZL7AXMQWSW9_oIgqajWWqec4Qu3bnHo_UEtnSgcss0rV6sEvbRMiF4F-jad3cOEqCN2wDPYI',
    price: '₹400',
    light: 'Bright, indirect light',
    water: 'Water when dry',
    feature: 'Trailing plant',
    category: 'Indoor'
  },
  {
    id: 6,
    name: 'Peace Lily',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH35-WRpjHltSLumjZpNI5asEuY7-0FmeSgeGkLlPhP2jEQRrXR8dLlUiimsiqBnoMwqhiCAx89SXggewJEOfFzFIG0JI_BM7GKeyBRGpZIacI1DWcWQGvoiO3oEpPyvqsSwULlxvOx47dp3CxMOkfBju2erSlAMK8vhe53n5PQcns1Nk8z4ziLmrwvZ7FtVWgyfyjuVgaO2JAFhAaj_OtvSEqgGk1O2JVGU6MuaPDHUz_SkWMpBE-FqEoddIIcJ0fJhXSOs3Xh7w',
    price: '₹500',
    light: 'Low to bright light',
    water: 'Keep soil moist',
    feature: 'Flowering',
    category: 'Flowering'
  },
  {
    id: 7,
    name: 'Areca Palm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcNm-c5GbYwB8xAQgWYL8P5nE7Hzn-Z3h8PdYYQIEX5c3bGJlIlahHMzF5uTYfW4-PQ6MOPrCT54lcexefxzmMZggmlS8FU9zTNFy1wqMdiUsSB3doYTaf2LdxfSDlmNORGbyDghITD2beuU_KG3ww-SxNnuWRnnUuswsLEMJ6GTcndASg3gYYgLMrnO9NzCs8y3reByPS3zdr4SqKFAIjA20l5heaLYf5EPbI8Yu2YJspDuAD4KfKF0KoOnGRUI9LXha_G3_u_w8',
    price: '₹1100',
    light: 'Bright, indirect light',
    water: 'Keep soil moist',
    feature: 'Pet-friendly',
    category: 'Outdoor'
  },
  {
    id: 8,
    name: 'Bird of Paradise',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsW8UoSrrmRAGP-RIPe9zCBcGk52jC_XIPCGOOx5MFEO3s56-REpwUr3NZb1BwCknGtcxccuhkWUzQdnq1DgZ-B2kjM-hgq76hkEX32i_mYr3AT_-Wb-DGSkqM6GTvJW-9BdTZbujJhx7HdYud1katRKMRzkAD4GzEay6ma1Y4tR1LyLfKA8gfbwYaojclhkQFciowA7ld68CJSCGG1GYbuqC9LxeuH2cwWoqyslKrfjIJ9551vkOKFyUCw6aJY8L9lx5RGTuaRzM',
    price: '₹1500',
    light: 'Bright, direct light',
    water: 'Water regularly',
    feature: 'Tropical vibe',
    category: 'Outdoor'
  }
]

