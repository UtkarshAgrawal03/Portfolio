import React from 'react';
import './App.css';
import MyImage from './Images/My project.png';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Check from './Check';
import Details from './components/Details';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className='mybg'>
    <Navbar/>
    <Check/>
    </div>
    <div className=' row second gx-0 px-2'>
      <div className='col col-lg-5 col-md-12 col-12 text-center'>
      <img src={MyImage} alt="img" className='img-fluid myimg'/>
      </div>
      <div className='col col-lg-6 col-md-12 col-12'>
      <Details/>
      </div>

    </div>
    <div>
      <Footer/>
    </div>

    
    
    </>
    
  )
}



export default App;
