import React,{useEffect, useState} from 'react'
import {getMessage, createMessage} from '../../Helper/getfunction'
import {serverTimestamp}from "firebase/firestore"
import Message from './Message';
import { useForm } from "react-hook-form";

function Channel(props:{user:string }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register:register2, handleSubmit:handleSubmit2} = useForm();
  const [newMessage, setNewMessage] = useState('');
  const [messages,setMessages] = useState([])
  const [user, setUser] = useState("")

	const signIn =()=>{
    
	}
	const signOut =()=>{

	}
  const onSubmit2= data =>{
    console.log(data)
    // let a = localStorage.getItem("user");
    localStorage.setItem("user", data.user);
    // console.log(a)
    // localStorage.setItem('user', 'Koolloop')
  }
  const onSubmit = data =>{
    const {text} = data
    let currentData = {
      "text": data.text,
      "createdAt": serverTimestamp(),
      "uid":"12",
      "displayname":"wwoodd2"
    }
    createMessage(currentData,function(res){
      console.log(res)
    })

  };
  console.log(user)
  console.log(user.length > 0)
  useEffect(()=>{
		getMessage((res)=>{
			console.log(res)
			setMessages(res)
		})
    setUser(localStorage.getItem("user") ? localStorage.getItem("user") : '')
	},[])
  return (
    <div className='chat bg-black w-[25%] overflow-auto flex flex-col' >
      <div className='text-zinc-500 h-8 text-center leading-4 tracking-wide font-semibold border-b border-zinc-500  '>
        你好！歡迎使用實況聊天室
      </div>
      <div className='h-4/5 p-4 grow bg-zinc-800 overflow-y-auto' >
        { 
        user.length > 0 ? 
          <ul>
            {messages
              ?.sort((first, second) =>
                first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
              )
              ?.map(message => (
                <li key={message.id}>
                  <Message {...message} />
                </li>
              ))}
          </ul>
         : 
          <form onSubmit={handleSubmit2(onSubmit2)}>
            <input
              type="text"
              {...register2("user", { required: true })} 
              className="text-zinc-800"
              placeholder="Full name"
            />
            <input type="submit" value="Submit"></input>
          </form> 
        }

        

      </div>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">聊天</label>
            <div className="flex flex-col justify-end items-end p-4">
                <input type="text" id="default-search" className="block px-4 py-2  w-full text-sm text-gray-100 bg-zinc-800 rounded-lg focus:bg-zinc-700 focus:border-0"  placeholder={user+' 傳送訊息' }{...register("text", { required: true })} />
                <button type="submit" className="text-white px-4 py-2 mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ">聊天</button>
            </div>
        </form>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Channel