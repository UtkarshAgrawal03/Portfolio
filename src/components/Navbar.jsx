import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container">
    <h1 className='text-info navbar-brand-lg'>Port<span className='text-white'>folio</span></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse  text-center" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link"  href="/"><h3 className='text-info'>Home</h3></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/"><h3 className='text-info'>About</h3></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/"><h3 className='text-info'>Contact</h3></a>
        </li>
        
        
        
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar