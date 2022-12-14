import React,{useState,useEffect} from 'react'
import { Link  } from "react-router-dom";
import StaticHeader from '../Components/StaticHeader'
import {getNewestWorks} from '../../../Helper/getfunction'
import { Video} from '../../../types'
interface Props {
	data : Video[];
	type:string;
}
function Videos({data,type} :Props) {
	const [work,setWork] = useState([])
  useEffect(()=>{
    getNewestWorks((res)=>{
      console.log(res)
      setWork(res)
    })
  },[])
  return (
    <div >
			<StaticHeader />
			<div className='w-10/12 mx-auto pt-10 md:pt-20'>
				<h1 className='text-xl font-semibold md:text-3xl '>熱門演出(VOD)</h1>

				<div className='grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 md:mt-14'>
					{
						work.map((item,index)=>{
							const { title,eng_title,total_duration,resolution,years, imgpath} = item
							return(
								<div key={index} className='group aspect-[1140/585] w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer brightness-90  hover:brightness-110'
									// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
								>	
									<Link to={ '/watchvideos/'+item.id}>
										<div className=' aspect-[1140/585] rounded-lg  overflow-hidden'>
											<img src={imgpath ? imgpath : process.env.PUBLIC_URL+'/images/'+'img.jpeg'} alt="" className='w-full h-full object-cover transition  duration-300  group-hover:scale-110'/>
										</div>
										<div className='mt-3'>
											<div className='text-white text-base font-normal mb-1 group-hover:text-emerald-300'>{title}</div>
											<div className='text-zinc-200 text-xs font-light leading-2'>
												<div>{eng_title}</div>
												<div>{years}．{total_duration} ．{resolution}</div>
											</div>

										</div>
									</Link>
									
								</div>
							)
						})
					}
					
					
				</div>

				<div className=' w-full flex justify-end mt-24'>
					<div className="flex items-center space-x-1 ">
							<a href="#" className="flex items-center px-4 py-2 text-gray-500 ">
									Previous
							</a>

							<a href="#" className="px-4 py-2 text-gray-700  hover:text-white">
									1
							</a>
							<a href="#" className="px-4 py-2 text-gray-700  hover:text-white">
									2
							</a>
							<a href="#" className="px-4 py-2 text-gray-700  hover:text-white">
									3
							</a>
							<a href="#" className="px-4 py-2 font-bold text-gray-500  hover:text-white">
									Next
							</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Videos