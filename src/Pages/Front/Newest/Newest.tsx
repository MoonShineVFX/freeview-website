import React from 'react'
import { Link  } from "react-router-dom";
function Newest(props:{data:any}) {
  return (
    <div className='w-8/12 mx-auto mt-14'>
			<h1 className='text-4xl font-semibold'>今日直播</h1>

			<div className='grid grid-cols-3 gap-8 mt-14'>
				{
					props.data.map((item,index)=>{
						return(
							<div className=' aspect-video w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer brightness-90  hover:brightness-110'
								// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
							>	
								<Link to={'/watch?v=' +item.id}>
									<img src={process.env.PUBLIC_URL+'/images/'+item.img} alt="" className='aspect-video object-cover rounded-sm'/>
									<div className='mt-3'>
										<div className='text-white text-base font-normal mb-1'>奇異博士五</div>
										<div className='text-zinc-200 text-xs font-light leading-2'>
											<div>Everything Everywhere All at Once</div>
											<div>2022．139分鐘 ．4K畫質</div>
										</div>

									</div>
								</Link>
								
							</div>
						)
					})
				}
			</div>

        

    </div>
  )
}

export default Newest