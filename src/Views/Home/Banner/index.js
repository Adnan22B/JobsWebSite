import React from 'react'

export default function index() {
  return (
    <section class="banner-section-four"  style={{backgroundImage :'url(assets/images/background/2.png)'}}>
      <div class="auto-container">
        <div class="cotnent-box">
          <div class="title-box wow fadeInUp" data-wow-delay="500ms">
            <h3>The Easiest Way to Get Your New Job</h3>
          </div> 
          <div class="job-search-form wow fadeInUp" data-wow-delay="1000ms">
            <form method="post" action="https://creativelayers.net/themes/superio/job-list-v10.html">
              <div class="row"> 
                <div class="form-group col-lg-4 col-md-12 col-sm-12">
                  <span class="icon flaticon-search-1"></span>
                  <input type="text" name="field_name" placeholder="Job title, keywords, or company"/>
                </div> 
                <div class="form-group col-lg-3 col-md-12 col-sm-12 location">
                  <span class="icon flaticon-map-locator"></span>
                  <input type="text" name="field_name" placeholder="City or postcode" />
                </div> 
                <div class="form-group col-lg-3 col-md-12 col-sm-12 category">
                  <span class="icon flaticon-briefcase"></span>
                  <select class="chosen-select">
                    <option value="">All Categories</option>
                    <option value="44">Accounting / Finance</option>
                    <option value="106">Automotive Jobs</option>
                    <option value="46">Customer</option>
                    <option value="48">Design</option>
                    <option value="47">Development</option>
                    <option value="45">Health and Care</option>
                    <option value="105">Marketing</option>
                    <option value="107">Project Management</option>
                  </select>
                </div> 
                <div class="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                  <button type="submit" class="theme-btn btn-style-two">Find Jobs</button>
                </div>
              </div>
            </form>
          </div> 
          <div class="popular-searches wow fadeInUp" data-wow-delay="1500ms">
            <span class="title">Popular Searches : </span>
            <a href="#">Designer</a>,
            <a href="#">Developer</a>,
            <a href="#">Web</a>,
            <a href="#">IOS</a>,
            <a href="#">PHP</a>,
            <a href="#">Senior</a>,
            <a href="#">Engineer</a>,
          </div> 
        </div>
      </div>
    </section>
  )
}
