import React,{useState,useEffect,useContext} from 'react'
// import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';

//chatroom
import LoginChannel from '../Components/Chat/LoginChannel';
import Channel from '../Components/Chat/Channel';
import {ChatuserContext} from '../../../Components/context/ChatuserProvider'
function Watch() {
	const MultiViewsDumbPlayerSettings = {
		url: 'dumb.mp4', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://mv.moonshine.tw/stream/an-dance-low',
		core: MultiViewsDumbPlayerCore.TILES, // TILES for vod, MSE for live
		columnCount: 4,
		rowCount: 4,
		styles: {
			main: {paddingLeft: '0px'},
			playback: {borderRadius: '8px'},
			trackControl: {marginTop: '0px', height: '48px'}
		},
		colors: {
		  highlight: '#6EE7B7',
		  main: 'white',
		  sub: '#ffffff50',
		  base: '#00000000'
		},
		onVideoPlaying: (videoTime: number) => console.log(videoTime)
	}

	const { state } = useContext(ChatuserContext);

  return (
    <div className='w-full flex mx-auto mt-15 overflow-hidden h-[calc(100vh-84px)]'>
			<div className='streamingvieos w-full grow'>
				{/*<div className='relative aspect-video flex flex-col'>*/}

				<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />

				{/*</div>*/}
				{/*<div className='bg-zinc-800 w-full h-auto flex justify-center items-center  box-border grow'> View 360 Controller</div>*/}
			</div>
			{
				!state.isLoggedIn ?
				<LoginChannel />
				:
				<Channel />
			}

			

    </div>
  )
}

export default Watch