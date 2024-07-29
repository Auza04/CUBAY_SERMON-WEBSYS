import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login.jsx';
import Home from '../components/Home.jsx';
import Barangay_Officials from '../components/Barangay_Officials.jsx';
import Reqcer from '../components/RequestCer.jsx';
import ResCRUD  from '../components/ResCRUD.jsx';
import Admin from '../components/Admin.jsx';
import PUCRUD from '../components/PER_USER_CRUD.jsx';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/login' element={ <Login />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/BarangayOfficials' element= { <Barangay_Officials />} />
        <Route path='/RequestCertificate' element = { <Reqcer /> } />
        <Route path='/manage_residents' element = { <ResCRUD />} />
        <Route path='/admin' element = { <Admin />} />
        <Route path='/manage_personnel_users' element = { <PUCRUD />} />
      </Routes>
    </BrowserRouter>
  );
} 