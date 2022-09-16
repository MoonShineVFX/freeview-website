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
			<div className='w-10/12 mx-auto pt-20'>
				<h1 className='text-4xl font-semibold '>熱門演出(VOD)</h1>

				<div className='grid grid-cols-3 gap-8 mt-14 md:grid-cols-1'>
					{
						work.map((item,index)=>{
							const { title,eng_title,total_duration,resolution,years, imgpath} = item
							return(
								<div key={index} className='group aspect-[1140/585] w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer brightness-90  hover:brightness-110'
									// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
								>	
									<Link to={ '/watchvideos?v='+item.id}>
										<div className=' aspect-[1140/585] rounded-lg  overflow-hidden'>
											<img src={imgpath ? imgpath : process.env.PUBLIC_URL+'/images/'+'img.jpeg'} alt="" className='w-full h-full object-cover transition  duration-300  group-hover:scale-110'/>
										</div>
										<div className='mt-3'>
											<div className='text-white text-base font-normal mb-1 group-hover:text-emerald-300'>{title}</div>
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