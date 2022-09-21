import React from 'react'
function Header() {
  return (
    <div id="header" className='relative w-full '>
        <div className="relative">
          <div className='w-full h-[185px] mx-auto  relative '>
            {/* <img src={process.env.PUBLIC_URL+'/images/'+item} alt="" className='rel'/> */}
            <div className='w-full h-full bg-no-repeat bg-bottom bg-cover relative opacity-[70%]'
              style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img2.jpeg'})`}}> 
              {/* <div className='absolute inset-0 bg-gradient-to-b from-[#0c0d11]   z-10'></div> */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#0c0d11]  z-10'></div>
              {/* <div className='absolute inset-0 bg-[#00000060] z-10'></div> */}
            </div>

          </div>
        </div>

    </div>
  )
}

export default Header