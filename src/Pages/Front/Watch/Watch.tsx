import React from 'react'
// import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';


function Watch() {
	const MultiViewsDumbPlayerSettings = {
		url: 'an-dance-low', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://mv.moonshine.tw/stream/',
		columnCount: 4,
		rowCount: 4,
		core: MultiViewsDumbPlayerCore.MEDIA_SOURCE_EXTENSION, // TILES for vod, MSE for live
		// styles: {
		// 	main: {paddingLeft: '20px'},
		// 	playback: {borderRadius: '18px'},
		// 	trackControl: {marginTop: '30px', height: '48px'}
		// },
		// colors: {
		//   highlight: 'yellow',
		//   main: 'red',
		//   sub: 'blue',
		//   base: 'green'
		// }
	}

  return (
    <div className='w-full flex mx-auto mt-15 overflow-hidden h-[calc(100vh-84px)]'>
			<div className='streamingvieos w-full grow'>
				{/*<div className='relative aspect-video flex flex-col'>*/}

				<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />

				{/*</div>*/}
				{/*<div className='bg-zinc-800 w-full h-auto flex justify-center items-center  box-border grow'> View 360 Controller</div>*/}
			</div>
			<div className='chat bg-black w-[25%] overflow-y-auto flex flex-col' >
				<div className='text-zinc-500 h-8 text-center leading-4 tracking-wide font-semibold border-b border-zinc-500  '>
					實況聊天室
				</div>
				<div className='h-4/5 p-4 grow bg-slate-600' >聊天連線中</div>
				<div className=''>
					<form action="" className='' >
							<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">聊天</label>
              <div className="flex flex-col justify-end items-end p-4">
                  <input type="text" id="default-search" className="block px-4 py-2  w-full text-sm text-gray-100 bg-zinc-800 rounded-lg focus:bg-zinc-700 focus:border-0"  required placeholder='傳送訊息' />
                  <button type="submit" className="text-white px-4 py-2 mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ">聊天</button>
              </div>
					</form>

				</div>
				<div>

				</div>
			</div>

    </div>
  )
}

export default Watch