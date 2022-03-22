import React from 'react'
import { Link } from 'react-router-dom'




export default function Header() {
  return (
    
        <header className="main-header"> 
      <div className="main-box"> 
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo"><Link to="index.html"><img src="assets/images/logo.svg" alt="" title="" /></Link></div>
          </div>

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
 
      <div className="mobile-header">
        <div className="logo"><Link to="index.html"><img src="images/logo.svg" alt="" title="" /></Link></div>
 
        <div className="nav-outer clearfix">

          <div className="outer-box"> 
            <div className="login-box">
              <Link to="login-popup.html" className="call-modal"><span className="icon-user"></span></Link>
            </div>

            <Link to="#nav-mobile" className="mobile-nav-toggler"><span className="flaticon-menu-1"></span></Link>
          </div>
        </div>
      </div>
 
      <div id="nav-mobile"></div>
    </header> 
  )
}
