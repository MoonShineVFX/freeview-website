import React from 'react'
import { Outlet} from 'react-router-dom';


import Navbar from '../Components/Navbar'
// import MobileNavbar from '../Components/MobileNavbar';
// import Footer from '../Components/Footer'

import NavData from '../Components/navbar.json'
// import footerData from '../Components/footer.json'
// import socialMediaData from '../Components/socialitemData.json'
import { RecoilRoot} from 'recoil';
import {navbarBgState} from '../atoms/modalAtom'

function PublicPageLayout() {
 

  const {navbar} =NavData
  


  return (
    <React.Fragment>
      <RecoilRoot>
      <Navbar data={navbar} types='home'/>
      {/* <MobileNavbar data={navbar} /> */}
      <Outlet />
      {/* <Footer footerData={footerData} socialmedia={socialmedia}/> */}
      </RecoilRoot>
    </React.Fragment>
  )
}

export default PublicPageLayout