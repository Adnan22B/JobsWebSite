import React from 'react'

export default function index() {
  return (
    <div>
        <section  className="banner-section -type-13">
      <div  className="auto-container">
        <div  className="row">
          <div  className="content-column col-lg-7">
            <div  className="inner-column">
              <div  className="title-box wow fadeInUp" data-wow-delay="300ms">
                <h3>There Are 93,178 Postings Here For you!</h3>
                <div  className="text">Find Jobs, Employment & Career Opportunities</div>
              </div> 
              <div  className="job-search-form wow fadeInUp" data-wow-delay="600ms">
                <form method="post" action="https://creativelayers.net/themes/superio/job-list-v10.html">
                  <div  className="row">
                    <div  className="form-group col-lg-5">
                      <span  className="icon flaticon-search-1"></span>
                      <input type="text" name="field_name" placeholder="Job title, keywords, or company" />
                    </div> 
                    <div  className="form-group col-lg-4 location">
                      <span  className="icon flaticon-map-locator"></span>
                      <input type="text" name="field_name" placeholder="City or postcode" />
                    </div> 
                    <div  className="form-group col-lg-3 btn-box">
                      <button type="submit"  className="theme-btn btn-style-one"><span  className="btn-title">Find Jobs</span></button>
                    </div>
                  </div>
                </form>
              </div> 
              <div  className="popular-searches wow fadeInUp" data-wow-delay="900ms">
                <span  className="title">Popular Searches : </span>
                <a href="#">Designer</a>,
                <a href="#">Developer</a>,
                <a href="#">Web</a>,
                <a href="#">IOS</a>,
                <a href="#">PHP</a>,
                <a href="#">Senior</a>,
                <a href="#">Engineer</a>,
              </div> 

              <div  className="bottom-box wow fadeInUp" data-wow-delay="1500ms">
                <div  className="count-employers">
                  <span  className="title">10k+ Candidates</span>
                  <img src="images/resource/multi-peoples.png" alt="" />
                </div>
                <a href="#"  className="upload-cv"><span  className="icon flaticon-file"></span> Upload your CV</a>
              </div>
            </div>
          </div>

          <div  className="image-column col-lg-5 col-md-12">
            <div  className="image-box">
              <figure  className="main-image wow fadeIn anm" data-wow-delay="1200ms" data-speed-x="2"><img src="images/index-13/header/2.png" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
