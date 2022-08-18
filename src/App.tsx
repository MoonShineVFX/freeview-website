import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import PublicPageLayout from './Layouts/PublicPageLayout'
// import DashboardPageLayout from './Layouts/DashboardPageLayout'

//pages
import Home from './Pages/Front/Home/Home';
import Watch from './Pages/Front/Watch/Watch';
import Newest from './Pages/Front/Newest/Newest';
import Videos from './Pages/Front/Videos/Videos';

//data
import {fakeData} from './Helper/HelperComponents'
function App() {
  return (
    <BrowserRouter>
      <Routes> 
            <Route path="/"  element={ <PublicPageLayout/>}>
              <Route path="" element={<Home />} />
              <Route path="newest" element={<Newest data={fakeData} />} />
              <Route path="videos" element={<Videos data={fakeData}/>} />
              <Route path="watch" element={<Watch />} />


            </Route>
            
            {/* <Route path="admin"  element={ <DashboardPageLayout/>}>
              <Route  path="" element={<AdminHome/>} />
              <Route  path="category" element={<AdminCateogry/>} />
              <Route  path="award" element={<AdminAward/>} />
              <Route  path="service" element={<AdminServices/>} />
              <Route  path="about" element={<AdminAbout/>} />
              <Route  path="contact" element={<AminContact/>} />
              <Route  path="headers" element={<AdminHeader/>} />
            </Route> */}
            
 
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
