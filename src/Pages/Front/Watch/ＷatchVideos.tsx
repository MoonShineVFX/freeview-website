import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player';
import {MultiViewsDumbPlayer, MultiViewsDumbPlayerCore} from 'multi-views-dumb-player';
import { useParams } from 'react-router-dom';
//import msgboard
import DisplayBoard from '../Components/Ｍsgboard/DisplayBoard'
import {getWorkById} from '../../../Helper/getfunction'
import { Video } from '../../../types'
function ＷatchVideos() {
	const {videoid} = useParams();
	const [data ,setData] = useState<Video | null >(null)
	console.log(videoid)

	const MultiViewsDumbPlayerSettings = {
		url: '202112312030SunsetTMC.mp4', // an-dance.mp4 (vod) or an-dance-low (live)
		host: 'https://storage.googleapis.com/freeview-data',
		core: MultiViewsDumbPlayerCore.TILES, // TILES for vod, MSE for live
		columnCount: 4,
		rowCount: 4,
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
		},
		onVideoPlaying: (videoTime: number) => console.log(videoTime)
	}
	useEffect(()=>{
		if(!videoid) return

		getWorkById(videoid,function(res){
			setData(res)
		})
	},[])
  return (
    <div className='w-full flex flex-col mx-auto mt-15  h-[calc(100vh-84px)] '>

				<div className='streamingvieos w-full grow'>
					<div className='  relative aspect-video flex flex-col'>
						{/* <ReactPlayer
							url={data?.video_url}
							width="100%"
							height="100%"
							playing
							controls
						/> */}
						<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />
						
					</div>
					<div className='bg-zinc-800 w-full  flex justify-center items-center  box-border grow h-20'> View 360 Controller</div>

				</div>
				<div className='w-8/12 mx-auto '>
					<div className='mt-10 border-b pb-10'>
						<div className='text-white text-3xl font-normal mb-1'>{data?.title}</div>
						<div className='text-zinc-200 text-base font-light leading-2 mt-5'>
							<div>{data?.eng_title}</div>
							<div>{data?.years}．{data?.total_duration} ．{data?.resolution}</div>

						</div>
						<div className='mt-5'>{data?.intro}</div>

					</div>
					{data?.msg_board_video_id &&
						<DisplayBoard video_id={data.msg_board_video_id}/>
					}
					
					
				</div>

			



    </div>
  )
}


export default ＷatchVideos