import React from 'react'
import { Link ,useLocation  } from "react-router-dom";
function Navbar({data , toggleTrueFalse}) {

  const { pathname } = useLocation();
  return (
    <div id="navbar" className='bg-black flex items-center text-white p-4  w-full  z-50 site-menu xs:hidden '>
      <div className="logo font-bold">
        <Link
          to="/"
        >
          FREEVIEW
        </Link>

      </div>

      <ul className='menu_list flex justify-center items-center  w-full ml-10'>
        { data?
          data.map((item,index)=>{
            return(
              <li key={index} className="mr-4 text-sm">
                <Link 
                  to={item.type}
                  className={ pathname.substring(1) === item.type ? 'active' : ''}
                >
                  {item.chtName}
                </Link>
              </li>
            )
          }): ""
        }
        <li className='ml-auto w-[300px]'>
          <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-100 bg-zinc-800 rounded-lg focus:bg-zinc-700 focus:border-0"  required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">搜尋</button>
              </div>
          </form>
          
        </li>
      </ul>
  


    </div>
  )
}

export default Navbar