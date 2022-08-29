import React,{useState,useEffect} from 'react'
// import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';
import Channel from '../../../Components/Chat/Channel';
function Watch() {
	const MultiViewsDumbPlayerSettings = {
		url: 'an-dance-low', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://mv.moonshine.tw/stream/',
		columnCount: 4,
		rowCount: 4,
		core: MultiViewsDumbPlayerCore.MEDIA_SOURCE_EXTENSION, // TILES for vod, MSE for live
		styles: {
			main: {paddingLeft: '20px'},
			playback: {borderRadius: '8px'},
			trackControl: {marginTop: '10px', height: '48px'}
		},
		colors: {
		  highlight: '#6EE7B7',
		  main: 'white',
		  sub: '#6EE7B7',
		  base: '#475569'
		}
	}

	

  return (
    <div className='w-full flex mx-auto mt-15 overflow-hidden h-[calc(100vh-84px)]'>
			<div className='streamingvieos w-full grow'>
				{/*<div className='relative aspect-video flex flex-col'>*/}

				<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />

				{/*</div>*/}
				{/*<div className='bg-zinc-800 w-full h-auto flex justify-center items-center  box-border grow'> View 360 Controller</div>*/}
			</div>
			<Channel />
			

    </div>
  )
}

export default Watch