import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props

  /*  副作用执行函数
   * fn() 执行函数
   * array[] 依赖项数组----“如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。”
   */
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className='before'></div>
      <div className='slider-container'>
        <div className='swiper-wrapper'>
          {bannerList.map(slider => {
            return (
              <div className='swiper-slide' key={slider.imageUrl}>
                <div className='slider-nav'>
                  <img src={slider.imageUrl} width='100%' height='100%' alt='推荐' />
                </div>
              </div>
            )
          })}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)
