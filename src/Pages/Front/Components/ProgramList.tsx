import React from 'react'
import { Link  } from "react-router-dom";
import { Video} from '../../../types'

interface Props {
	data : Video[];
	type:string;
	title:string;
}
function ProgramList( {data,type,title} :Props) {
  return (
    <div className='mt-10 mb-20'>
				<div className='flex justify-between items-center mb-5'>
					<div className='text-2xl '>{title}</div>
					<a href={'/'+type} className='text-sm text-zinc-200 py-2 px-3 bg-zinc-800 rounded-lg flex justify-center items-center hover:bg-zinc-10'>更多</a>
				</div>
        
				<div className='grid grid-cols-7 gap-5 md:grid-cols-2'>
					{
						data.slice(0, 7).map((item,index)=>{
							const { title,eng_title,total_duration,resolution,years} = item
							return(
								<div key={item.id} className='group aspect-[466/650] w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer brightness-90  hover:brightness-110'
									// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
								>	
									<Link to={(type === 'newest' ? '/watch?v=' +item.id : '/watchvideos/'+item.id)}>
										<img src={process.env.PUBLIC_URL+'/images/'+'img.jpeg'} alt="" className='aspect-[466/650] object-cover rounded-lg'/>
										<div className='mt-3'>
											<div className='text-white text-sm font-normal mb-1 group-hover:text-emerald-300'>{title}</div>
											<div className='text-zinc-400 text-xs font-light leading-2'>
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

    </div>
  )
}

export default ProgramList