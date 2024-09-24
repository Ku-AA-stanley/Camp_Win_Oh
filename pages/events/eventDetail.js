import React from 'react'
import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'

import CampingFeatures from '@/components/event/CampingFeatures'

export default function eventDetail() {
  const features = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '親子設施',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '投幣式洗衣機',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '接送服務',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '無障礙設施',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '攜帶寵物',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ec672f5f1e9e17466a138ba900b4f8c839d7b3b166bd9aa25c0cafe5dcb490bb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '野餐桌',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '供應熱水',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ec672f5f1e9e17466a138ba900b4f8c839d7b3b166bd9aa25c0cafe5dcb490bb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '餐廳',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e9bb68388691c3855b9a6d24016bf7fda07cf7350970456824ed38ccf26dedb?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
      label: '公共衛浴',
    },
  ]
  return (
    <>
      <Navbar />
      <section className="event-detail">
        <div className="event-title">
          <h1 className="event-titleh1">夏日狂歡派對</h1>
          <div>
            <Button label="加入活動" onClick={() => alert('Button clicked!')} />
          </div>
        </div>
        <section className="event-section">
          <h2 className="section-titleh2">活動資訊</h2>

          <div className="event-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4f42695911ec327af3315bd4e177bdf625338dc60fd9748e07ebb6fc9deab6?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f"
              alt="Event image"
              className="event-image"
            />
         
          </div>
        </section>
        <section className="event-section">
          <h2 className="section-titleh2">營地相關設施</h2>
        </section>
        <CampingFeatures />
      </section>
      <Footer2 />
    </>
  )
}
