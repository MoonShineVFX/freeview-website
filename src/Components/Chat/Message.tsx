import React from 'react'
import { formatRelative } from 'date-fns';
interface Props{
  createdAt:{
    seconds:number
  },
  text:string,
  displayname:string
}
const formatDate = (date)=>{
    let formattedDate = '';
    if(date){
      formattedDate = formatRelative(date,new Date());
      formattedDate = formattedDate.charAt(0).toUpperCase()+formattedDate.slice(1)
    }
    return formattedDate
  }
function Message({createdAt ,text ,displayname}:Props) {
  if (!text) return null;

  
  return (
    <div className="px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-start">
       <div>
        <div className="flex items-center mb-1">
          {displayname ? (
            <p className="mr-2 text-blue-500 font-semibold ">{displayname}</p>
          ) : null}
          {createdAt?.seconds ? (
            <span className="text-zinc-300 text-xs">
              {formatDate(new Date(createdAt.seconds * 1000))} 
            </span>
          ) : null}
        </div>
        <p className='text-sm'> {text}</p>
        
      </div>
    </div>
  )
}

export default Message