import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Faculty.css'
import data from '../../utils/faculty.json'
import { sliderSettings } from '../../utils/common'
function Faculty() {
  return (
    <div className="r-wrapper" id='all-teams'>
      <div className="paddings innerWidth r-container">

        <div className="r-head flexColStart">
          <span className='orangeText'>Battle Of Bytes <br /> <hr style={{ width: '75%', margin: 'auto' }} /> </span>
          <span className='primaryText'>Special Faculty Members</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {/* slider setting will be destructured as props */}
          {
            data.map((it, index) => (
              <SwiperSlide key={index}>
                <div className="flexColStart r-card" id={it.name}>
                  <span className='primaryText' style={{ fontSize: '1.5rem' }}>{it.name}</span>
                  <span className="secondaryText r-price">
                    <span> <span style={{ color: 'orange' }}></span> {it.posi}</span>
                  </span>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
        
      </div>
    </div>
  )
}

export default Faculty

const SliderButtons = () => {
  const swiper = useSwiper()
  //useSwiper hook
  return (
    <div className="flexCenter r-btn">
      <button onClick={() => swiper.slidePrev()} style={{ width: '1.8rem', height: '1.8rem', color: 'blue', fontSize: '1.3rem', border: 'none', borderRadius: '5px' }}>&lt;</button>
      <button onClick={() => swiper.slideNext()} style={{ width: '1.8rem', height: '1.8rem', color: 'blue', fontSize: '1.3rem', border: 'none', borderRadius: '5px' }}>&gt;</button>
    </div>
  );
}