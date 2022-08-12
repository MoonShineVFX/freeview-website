import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import PublicPageLayout from './Layouts/PublicPageLayout'
// import DashboardPageLayout from './Layouts/DashboardPageLayout'

//pages
import Home from './Pages/Front/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
            <Route path="/"  element={ <PublicPageLayout/>}>
              <Route path="" element={<Home />} />


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
