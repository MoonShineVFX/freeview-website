import React,{useState,useEffect,useContext} from 'react'
import { useForm } from "react-hook-form";

import { ChatuserContext } from '../../../../Components/context/ChatuserProvider'
function LoginChannel() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [user, setUser] = useState("")
  const {  login } = useContext(ChatuserContext);
  const onSubmit= data =>{
    console.log(data)
    login(data.user)
    setUser(data.users)
    // let a = localStorage.getItem("user");
    // localStorage.setItem("user", data.user);
    // console.log(a)
    // localStorage.setItem('user', 'Koolloop')
  }
  useEffect(()=>{

	},[])
  return (
    <div className='chat bg-zinc-800 w-[25%] overflow-auto flex flex-col '>
      <div className='flex flex-col justify-center items-center py-40 '>
        <div className='mb-4 text-sm text-zinc-200'>聊天室入口</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("user", { required: true })} 
              className="text-zinc-800 text-sm rounded-md p-2"
              placeholder="請輸入聊天室暱稱"
            />
          </div>
          <div>
            <input type="submit" value="送出" className='w-full text-white px-4 py-2 mt-2 bg-gray-700 rounded-md'></input>
          </div>



        </form> 
      </div>

    </div>
  )
}

export default LoginChannel