import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import PublicPageLayout from './Layouts/PublicPageLayout'
import PlayPageLayout from './Layouts/PlayPageLayout';
import DashboardPageLayout from './Layouts/DashboardPageLayout'
//route
import {AuthProvider} from './Components/Auth'
import {ChatuserProvider} from './Components/context/ChatuserProvider'
// import PublicRoutes from './Routes/PublicRoutes'
// import ProtectedRoutes from './Routes/ProtectedRoutes'

//pages
import Home from './Pages/Front/Home/Home';
import Watch from './Pages/Front/Watch/Watch';
import WatchVideos from './Pages/Front/Watch/ＷatchVideos'
import WatchVodAr from './Pages/Front/Watch/WatchVodAr'
import WatchArVideos from './Pages/Front/Watch/ＷatchArVideos'
import WatchTest from './Pages/Front/Watch/WatchTest';
import Watch5gTest from './Pages/Front/Watch/Watch5gTest';
import Watch5gTestDemo from './Pages/Front/Watch/Watch5gTestDemo';
import Newest from './Pages/Front/Newest/Newest';
import Videos from './Pages/Front/Videos/Videos';
import AdminHome from './Pages/Back/Home'

//data
import {fakeData} from './Helper/HelperComponents'
function App() {


  return (
    <AuthProvider>
    <ChatuserProvider>
    <BrowserRouter>
      <Routes> 
            <Route path="/"  element={ <PublicPageLayout/>}>
              <Route path="" element={<Home />} />
              <Route path="newest" element={<Newest data={fakeData} types='stream' />} />
              <Route path="videos" element={<Videos data={fakeData} types='video' />  }  />
            
            </Route>
            <Route path="/"  element={ <PlayPageLayout/>}> 
              <Route path="stream" element={<Watch />} />
              <Route path="test" element={<WatchTest />} />
              <Route path="5gtest" element={<Watch5gTestDemo />} />
              <Route path="live" element={<Watch5gTest />} />
              <Route path="vodar" element={<WatchVodAr />} />
              <Route path="watcharvideos/:videoid" element={<WatchArVideos />} />
              <Route path="watchvideos/:videoid" element={<WatchVideos />} />
              
            </Route>
            
            <Route path="admin"  element={ <DashboardPageLayout/>}>
              <Route  path="videos" element={<AdminHome types='history'/>} />
              <Route  path="stream" element={<AdminHome types='stream'/>} />
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
    </ChatuserProvider>
    </AuthProvider>
  );
}

export default App;
