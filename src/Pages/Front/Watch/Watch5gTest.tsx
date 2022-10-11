import React,{useState,useEffect,useContext} from 'react'
// import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';

//chatroom
import LoginChannel from '../Components/Chat/LoginChannel';
import Channel from '../Components/Chat/Channel';
import {ChatuserContext} from '../../../Components/context/ChatuserProvider'
function Watch5gTest() {
	const MultiViewsDumbPlayerSettings = {
		url: 'stream', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://stream.moonshine.tw',
		core: MultiViewsDumbPlayerCore.MEDIA_SOURCE_EXTENSION, // TILES for vod, MSE for live
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
		  base: '#33000000'
		},
		onVideoPlaying: (videoTime: number) => console.log(videoTime)
	}

	const { state } = useContext(ChatuserContext);

  return (
    <div className='w-full flex mx-auto mt-15  flex-col md:flex-row items-start'>
			<div className='streamingvieos w-full aspect-[1/1]  md:w-10/12 md:aspect-[14/10]  relative  max-w-[1300px]'>
				{/*<div className='relative aspect-video flex flex-col'>*/}

				<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />

				{/*</div>*/}
				{/*<div className='bg-zinc-800 w-full h-auto flex justify-center items-center  box-border grow'> View 360 Controller</div>*/}
				<div className='ar_btn absolute right-8 bottom-[20%] text-2xl font-semibold italic text-zinc-200 hover:text-white cursor-pointer drop-shadow-2xl' >AR</div>
			</div>
			<div className='w-full lg:mx-auto lg:w-5/12 max-h-screen'>
				{
					!state.isLoggedIn ?
					<LoginChannel />
					:
					<Channel />
				}
			</div>


			

    </div>
  )
}

export default Watch5gTest