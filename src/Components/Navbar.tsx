import React from 'react'
import { FaVimeoV,FaLinkedin,FaFacebookF,FaInstagram } from "react-icons/fa";
import { Link ,useLocation  } from "react-router-dom";
function Navbar({data , toggleTrueFalse}) {

  const { pathname } = useLocation();
  return (
    <div id="navbar" className='flex justify-between items-center text-white top-3 left-1/2 -translate-x-2/4 w-11/12 fixed z-50 site-menu xs:hidden '>
      <div className="logo">
        <Link
          to="/"
        >
          LOGO1
        </Link>

      </div>
      <div className="navlist">
        <ul className='menu_list'>
          { data?
            data.map((item,index)=>{
              return(
                <li key={index}>
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
        </ul>
      </div>


    </div>
  )
}

export default Navbar