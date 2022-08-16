import { data } from 'autoprefixer'
import React from 'react'

function ProgramList(props: {title:string, data:any}) {
  return (
    <div className='mt-10'>
        <div className='text-lg mb-5'>{props.title}</div>
				<div className='grid grid-cols-6 gap-8'>
					{
						props.data.map((item,index)=>{
							return(
								<div className=' aspect-[4/6] w-full bg-cover bg-no-repeat bg-center transition-all cursor-pointer hover:brightness-110'
									// style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item})`}}
								>	
									<img src={process.env.PUBLIC_URL+'/images/'+item} alt="" className='aspect-[4/6] object-cover rounded-sm'/>
									<div className='mt-3'>
                    <div className='text-white text-base font-normal mb-1'>奇異博士五</div>
                    <div className='text-zinc-200 text-xs font-light leading-2'>
                      <div>Everything Everywhere All at Once</div>
                      <div>2022．139分鐘 ．4K畫質</div>
                    </div>

                  </div>
								</div>
							)
						})
					}
				</div>

    </div>
  )
}

export default ProgramList