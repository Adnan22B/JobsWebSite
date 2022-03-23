import React from 'react'
import { Link } from 'react-router-dom'




export default function Header() {
  return ( 
<div className='main-header'>
  
<div className='mobile-nav-toggler flaticon-menu-1' type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ></div>
  <div className='main-box'>
    <div className='logo-area'>
    <Link className='navbar-brand'>
      <strong>Job Recruiter</strong>
    </Link>
    </div>
     <div className='nav-outer'> 
<nav className="navbar navbar-expand-lg ">
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <div className='nav-outer'>
          <nav className="nav main-menu">
             <ul className="navigation" id="navbar">
               <li>
                 <Link to='/'>Home</Link>
               </li>
               <li>
                 <Link to='/all-jobs'>Explore Jobs</Link>
             </li>
               <li>
                 <Link to='about'>About</Link>
               </li>
               <li>
               <Link to = '/all-blogs'>Blogs</Link>
               </li>
               <li>
                 <Link to ='/contact-us'>Contacts</Link>
               </li>
             </ul>
           </nav> 
          </div>
  </div>
</nav> 
     </div>
     <div className='outer-box'>
     <div className="d-flex form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="theme-btn btn-style-one" type="submit">Search</button>
    </div>
     </div>
  </div>

</div>
  )
}
