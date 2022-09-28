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
	
	
	useEffect(()=>{
		if(!videoid) return

		getWorkById(videoid,function(res){
			setData(res)
			console.log(res)
		})
	},[])

	const MultiViewsDumbPlayerSettings = {
		url: data?.video_url, // an-dance.mp4 (vod) or an-dance-low (live)
		host: data?.video_host,
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
  return (
    <div className='w-full flex   mx-auto mt-15   items-start gap-5 mt-10'>

				
				{data &&
					<div className='streamingvieos mx-auto w-10/12 aspect-[14/10] p-5'>
					<MultiViewsDumbPlayer {...MultiViewsDumbPlayerSettings} />
					</div>
					
				}

				<div className='w-4/12  p-5'>
					<div className='mt-5 border-b border-zinc-400 pb-10'>
						<div className='text-white text-2xl font-normal mb-1'>{data?.title}</div>
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