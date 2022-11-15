import React,{useState,useEffect,useContext} from 'react'
// import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';
import { useParams, Link } from 'react-router-dom';
//chatroom
import LoginChannel from '../Components/Chat/LoginChannel';
import Channel from '../Components/Chat/Channel';
import {ChatuserContext} from '../../../Components/context/ChatuserProvider'
function Watch5gTestDemo() {
	const MultiViewsDumbPlayerSettings = {
		url: '5g_demo_stream.mp4', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://stream.moonshine.tw',
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
		  base: '#33000000'
		},
		onVideoPlaying: (videoTime: number) => console.log(videoTime)
	}

	const { state } = useContext(ChatuserContext);

  return (
    <div className='w-full flex mx-auto mt-15  flex-col lg:flex-row items-start'>
			<div className='streamingvieos w-full aspect-[1/1] md:aspect-[15/10]  lg:w-10/12 lg:aspect-[14/10]  relative  max-h-[93vh]' style={{touchAction: 'none'}}>
				{/*<div className='relative aspect-video flex flex-col'>*/}

				<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />

				{/*</div>*/}
				{/*<div className='bg-zinc-800 w-full h-auto flex justify-center items-center  box-border grow'> View 360 Controller</div>*/}
				<Link to="/watcharvideos/l7oozmjf" className='ar_btn absolute right-4 lg;right-8 top-[70%] text-xl lg:top-[80%] lg:text-2xl font-semibold italic text-zinc-200 hover:text-white cursor-pointer drop-shadow-2xl' >AR</Link>
			</div>
			<div className='w-full lg:mx-auto lg:w-3/12 max-h-screen'>
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

export default Watch5gTestDemo