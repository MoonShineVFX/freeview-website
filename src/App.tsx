import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import PublicPageLayout from './Layouts/PublicPageLayout'
import DashboardPageLayout from './Layouts/DashboardPageLayout'
//route
import {AuthProvider} from './Components/Auth'
// import PublicRoutes from './Routes/PublicRoutes'
// import ProtectedRoutes from './Routes/ProtectedRoutes'

//pages
import Home from './Pages/Front/Home/Home';
import Watch from './Pages/Front/Watch/Watch';
import WatchVideos from './Pages/Front/Watch/ＷatchVideos'
import Newest from './Pages/Front/Newest/Newest';
import Videos from './Pages/Front/Videos/Videos';
import AdminHome from './Pages/Back/Home'

//data
import {fakeData} from './Helper/HelperComponents'
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes> 
            <Route path="/"  element={ <PublicPageLayout/>}>
              <Route path="" element={<Home />} />
              <Route path="newest" element={<Newest data={fakeData} type='stream' />} />
              <Route path="videos" element={<Videos data={fakeData}/>} type='video' />
              <Route path="watch" element={<Watch />} />
              <Route path="WatchVideos" element={<WatchVideos />} />


            </Route>
            
            <Route path="admin"  element={ <DashboardPageLayout/>}>
              <Route  path="" element={<AdminHome/>} />
              {/* <Route  path="category" element={<AdminCateogry/>} /> */}
              {/* <Route  path="award" element={<AdminAward/>} /> */}
              {/* <Route  path="service" element={<AdminServices/>} /> */}
              {/* <Route  path="about" element={<AdminAbout/>} /> */}
              {/* <Route  path="contact" element={<AminContact/>} /> */}
              {/* <Route  path="headers" element={<AdminHeader/>} /> */}
            </Route>

            {/* <Route path="login" element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route> */}
            
 
          
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
