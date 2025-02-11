import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'


export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <h1 className='text-3xl font-bold text-blue-500 text-center mb-5 mt-5'>User Testimonials</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/C7X7S8d/Screenshot-2024-12-23-031543.png"
            text='Name: Raihan John'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/C7X7S8d/Screenshot-2024-12-23-031543.png"
            text='Name: Nuton Tors'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/C7X7S8d/Screenshot-2024-12-23-031543.png"
            text='Name: Alexjander Graham'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
