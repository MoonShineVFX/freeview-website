import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
function Header() {
  const imgs = ['img.jpeg','img.jpeg','img.jpeg','img.jpeg']
  return (
    <div id="header" className='relative w-full '>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={true} modules={[Pagination]} 
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      > 
        {
          imgs.map((item,index)=>{
            return(
              <SwiperSlide key={index} className="relative">
                <div className='w-full h-[385px] mx-auto  relative '>
                  {/* <img src={process.env.PUBLIC_URL+'/images/'+item} alt="" className='rel'/> */}
                  <div className='w-full h-full bg-no-repeat bg-center bg-cover relative '
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}> 
                    <div className='absolute inset-0 bg-gradient-to-b from-[#0c0d11] opacity-[70%]  z-10'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-[#0c0d11]  z-10'></div>
                    {/* <div className='absolute inset-0 bg-[#00000060] z-10'></div> */}
                  </div>
                  <div className=' absolute bottom-16 left-16 z-10 '>
                    <div className='text-3xl font-normal mb-2'>奇異博士五</div>
                    <div className='text-zinc-200 text-sm font-light leading-6'>
                      <div>Everything Everywhere All at Once</div>
                      <div>2022．139分鐘 ．4K畫質</div>
                    </div>

                  </div>
                </div>

              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}

export default Header