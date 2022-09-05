import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form";
import {getMsgBoardById, updateMsgBoardById} from '../../../../Helper/getfunction'
import { LoadingAnim } from '../../../../Helper/HelperComponents';

interface ImsgData {
  id:string;
  msg:Array<{
    user:string,
    text:string,
    createdAt:string
  }>;
  uid:string;
  v_id:string;
}
interface Props {
  video_id : string;
}

function DisplayBoard({video_id}:Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [msgData, setMsgData] = useState<ImsgData[]>([])
  
  const handleClick = ()=>{
    console.log('click')
    updateMsgBoardById(msgData,(res)=>{
      console.log(res)
    })
  }
  const onSubmit= data =>{
    console.log(data)

    let currentData = {
      'user':data.user,
      'text':data.text,
      'createdAt':new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '') 
    }
    updateMsgBoardById(msgData.uid,currentData,(res)=>{
      console.log(res)
    })
    // let a = localStorage.getItem("user");
    // localStorage.setItem("user", data.user);
    // console.log(a)
    // localStorage.setItem('user', 'Koolloop')
  }
  useEffect(()=>{
    getMsgBoardById(video_id,(res)=>{
      console.log(res)
      console.log(res.msg)
      setMsgData(res)
    })
    
  },[])
  console.log(typeof msgData.msg)
  return (
    <div>
      <div className='my-10'>留言評論區</div>
      
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className='flex gap-5 mt-5'>
            <input
              type="text"
              {...register("user", { required: true })} 
              className="w-1/5 text-zinc-200 text-sm rounded-md p-2 bg-zinc-700"
              placeholder="暱稱"
            />
            <input
              type="text"
              {...register("text", { required: true })} 
              className="w-full text-zinc-800 text-sm p-2 bg-[#0c0d11] border-b border-zinc-400"
              placeholder="訊息"
            />
         </div>

          <div className='w-20 ml-auto'>
            <input type="submit" value="送出" className='w-full text-white px-4 py-2 mt-2 bg-gray-700 rounded-md'></input>
          </div>



        </form> 

      {msgData.msg &&
        Object.keys(msgData.msg).length > 0 ?
        msgData.msg.map((item,index)=>{
          const {user,text,createdAt} =item
          return(
            <div key={user+index} className='flex  items-center gap-11 mb-10'>
							<div className='h-14 w-14 rounded-full  text-center leading-[56px]  bg-[#40b587]'>{String(user).slice(0,1)}</div>
							<div className='text-sm leading-7'>
								<div className=''>{user} <span className='text-zinc-300'>{createdAt}</span>  </div>
								<div>{text}</div>	
							</div>
						</div>
          )
        }) : <div className='mb-10'>目前還沒有人留言</div>
      }
    </div>
  )
}

export default DisplayBoard