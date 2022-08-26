import React from 'react'
import ReactPlayer from 'react-player';
function ＷatchVideos() {
  return (
    <div className='w-full flex flex-col mx-auto mt-15  h-[calc(100vh-84px)] '>

				<div className='streamingvieos w-full grow'>
					<div className='  relative aspect-video flex flex-col'>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=gQlMMD8auMs`}
							width="100%"
							height="100%"
							playing
							controls
						/>
						
					</div>
					<div className='bg-zinc-800 w-full  flex justify-center items-center  box-border grow h-20'> View 360 Controller</div>

				</div>
				<div className='w-8/12 mx-auto '>
					<div className='mt-10 border-b pb-10'>
						<div className='text-white text-3xl font-normal mb-1'>奇異博士五</div>
						<div className='text-zinc-200 text-base font-light leading-2 mt-5'>
							<div>Everything Everywhere All at Once</div>
							<div>2022．139分鐘 ．4K畫質</div>

						</div>
						<div className='mt-5'>『★多元宇宙全新詮飾 ★致敬多部知名電影 軟爛丈夫+暴走女兒 一無是處的艾芙琳只有在這它媽的宇宙搖中才能拯救世界。』55歲的美國華裔移民秀蓮家庭事業兩崩潰。在爸爸生日大壽這天，除了要阻止女兒出櫃、替無用丈夫擦屁股，還得去稅務局向古板大嬸解釋稅務問題。甫踏進大樓電梯，軟爛丈夫竟搖身一變演起駭客任務，聲稱自己是另一個宇宙的版本，而艾芙琳也是千萬宇宙裡的其中一個。還來不及理解，邪惡勢力已在多元宇宙中蔓延…</div>

					</div>
					<div className='mt-10'>
						<div className='flex  items-center gap-11 mb-10'>
							<div className='h-14 w-14 rounded-full  text-center leading-[56px] bg-zinc-400'>W</div>
							<div className='text-sm leading-7'>
								<div className=''>Jinglebella Lin  <span className='text-zinc-300'>2022/08/03</span>  </div>
								<div>這兩個二哈滿有趣的！</div>	
							</div>
						</div>
						<div className='flex  items-center gap-11 mb-10'>
							<div className='h-14 w-14 rounded-full  text-center leading-[56px] bg-zinc-400'>W</div>
							<div className='text-sm leading-7'>
								<div className=''>Jinglebella Lin  <span className='text-zinc-300'>2022/08/03</span>  </div>
								<div>這兩個二哈滿有趣的！</div>	
							</div>
						</div>
						<div className='flex  items-center gap-11 mb-10'>
							<div className='h-14 w-14 rounded-full  text-center leading-[56px] bg-zinc-400'>W</div>
							<div className='text-sm leading-7'>
								<div className=''>Jinglebella Lin  <span className='text-zinc-300'>2022/08/03</span>  </div>
								<div>這兩個二哈滿有趣的！</div>	
							</div>
						</div>
						<div className='flex  items-center gap-11 mb-10'>
							<div className='h-14 w-14 rounded-full  text-center leading-[56px] bg-zinc-400'>W</div>
							<div className='text-sm leading-7'>
								<div className=''>Jinglebella Lin  <span className='text-zinc-300'>2022/08/03</span>  </div>
								<div>這兩個二哈滿有趣的！</div>	
							</div>
						</div>
					</div>
				</div>

			



    </div>
  )
}


export default ＷatchVideos