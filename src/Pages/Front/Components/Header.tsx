import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay} from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import {headerData} from '../../../Helper/HelperComponents'
function Header() {
  const imgs = ['img.jpeg','img.jpeg','img.jpeg','img.jpeg']
  return (
    <div id="header" className='relative w-full '>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{delay:2000}}
        pagination={true} modules={[Autoplay,Pagination]} 
        onSlideChange={() => console.log('slide change')}
      > 
        {
          headerData.map((item,index)=>{
            return(
              <SwiperSlide key={index} className="relative">
                <div className='w-full h-[300px] mx-auto  relative md:h-[385px]'>
                  {/* <img src={process.env.PUBLIC_URL+'/images/'+item} alt="" className='rel'/> */}
                  <div className='w-full h-full bg-no-repeat bg-center bg-cover relative '
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item.img})`}}> 
                    <div className='absolute inset-0 bg-gradient-to-b from-[#0c0d11] opacity-[70%]  z-10'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-[#0c0d11]  z-10'></div>
                    {/* <div className='absolute inset-0 bg-[#00000060] z-10'></div> */}
                  </div>
                  <div className=' absolute bottom-16 left-8 z-10 md:left-8 hidden'>
                    <div className='text-xs px-4 py-2 rounded-3xl bg-slate-800 text-zinc-300 w-auto mb-3 inline-block'>{item.types}</div>
                    <div className='text-xl font-normal mb-2 md:text-2xl'>{item.title}</div>
                    <div className='text-zinc-200 text-sm font-light leading-6'>
                      <div>{item.eng_title}</div>
                      {/* <div>2022．139分鐘 ．4K畫質</div> */}
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