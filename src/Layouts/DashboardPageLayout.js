import React, { useEffect } from 'react'
import {Outlet,useLocation,useNavigate} from 'react-router-dom';
import AdminNavbar from '../Pages/Back/Components/AdminNavbar';
import { RecoilRoot } from 'recoil';
function DashboardPageLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(location.pathname === '/admin' || location.pathname === '/admin/' ) {
      navigate("/admin/videos")
    }
  },[])

  return (
    <React.Fragment>
      <RecoilRoot>
        <div className='flex'>
          <AdminNavbar />
          <Outlet />
        </div>
      </RecoilRoot>


    </React.Fragment>
  )

}

export default DashboardPageLayout