import React from 'react'
import ReactPlayer from 'react-player';
function Watch() {
  return (
    <div className='w-full flex  '>
			<div className='streamingvieos w-4/5'>
				<div className='  relative aspect-video '>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=aS_B3dq9foU`}
						width="100%"
						height="90%"
						playing
						controls
					/>
					<div className='bg-zinc-800 w-full h-20 flex justify-center items-center  '> View Controller</div>
				</div>

			</div>
			<div className='chat bg-black w-1/5 overflow-y-auto h-screen'>
				<div className='text-white border-y border-zinc-500 text-center py-3 font-semibold'>
					實況聊天室
				</div>
				<div>

				</div>
			</div>

    </div>
  )
}

export default Watch