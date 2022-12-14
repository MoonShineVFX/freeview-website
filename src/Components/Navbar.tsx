import React,{useEffect} from 'react'
import { Link ,useLocation  } from "react-router-dom";
import { useRecoilState } from 'recoil';
import {navbarBgState} from '../atoms/modalAtom'
import { HiChevronDown } from "react-icons/hi";
function Navbar({data , toggleTrueFalse,types}) {
  const [navbarBg, setNavbarBg] = useRecoilState(navbarBgState);
  const listenToScroll = ()=>{
    if(window.pageYOffset > 100){
      setNavbarBg(true)
    }else{
      setNavbarBg(false)
    }
  }
  const { pathname } = useLocation();
  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll)
  },[])
  return (
    <div id="navbar" className={ " flex  items-center text-white py-3 px-6  w-full bg-[#00000060] z-50 site-menu   " + (types === 'play' ? ' relative drop-shadow-lg ' : 'fixed ' ) + (navbarBg && ' bg-[#000000dd]')}>
      <div className="logo font-bold">
        <Link
          to="/"
          className='text-emerald-300'
        >
          FREEVIEW
        </Link>

      </div>

      <ul className='menu_list flex w-full ml-4 text-sm flex-wrap items-center md:ml-10 '>
        
        { data?
          data.map((item,index)=>{
            return(
              <li key={index} className={"mr-4 hover:text-emerald-300 transition group relative" + (item.display === '1' ? ' ' : ' hidden')}>
                <Link 
                  to={item.type}
                  className={pathname.substring(1) === item.type ? 'font-bold text-emerald-300  flex items-center' : 'whitespace-nowrap flex  items-center    '}
                >
                  {item.chtName}
                  {item.children &&   <HiChevronDown className='ml-1'/> }
                </Link>
              </li>
            )
          }): ""
        }
        

        {/* <li className='ml-auto w-[300px] md:hidden'>
          <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-100 bg-[#0B0D1088] rounded-lg focus:outline-none focus:border border-slate-400   "  required />
                  <button type="submit" className="text-zinc-200 absolute right-2.5 bottom-2.5 bg-[#0B0D10] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">??????</button>
              </div>
          </form>
          
        </li> */}
      </ul>
      {/* <ul className='flex md:hidden ml-4 gap-3'>
        <li><Link to="5gtest">5G??????</Link> </li>
        <li><Link to="watchvideos/l7oozmjf">VOD</Link> </li>
        <li><Link to="videos">VOD List</Link> </li>
      </ul> */}
  


    </div>
  )
}

export default Navbar