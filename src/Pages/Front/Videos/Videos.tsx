import React from 'react'
import { Link  } from "react-router-dom";
import StaticHeader from '../Home/Components/StaticHeader'
function Videos(props:{types:string, data:any}) {
  return (
    <div >
			<StaticHeader />
			<div className='w-10/12 mx-auto pt-20'>
				<h1 className='text-4xl font-semibold '>歷史影片</h1>

				<div className='grid grid-cols-3 gap-8 mt-14'>
					{
						props.data.map((item,index)=>{
							return(
								<div key={index} className='group aspect-video w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer brightness-90  hover:brightness-110'
									// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
								>	
									<Link to={ '/watchvideos?v='+item.id}>
										<img src={process.env.PUBLIC_URL+'/images/'+item.img} alt="" className='aspect-video object-cover rounded-lg'/>
										<div className='mt-3'>
											<div className='text-white text-base font-normal mb-1 group-hover:text-emerald-300'>奇異博士五</div>
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
    </div>
  )
}

export default Videos