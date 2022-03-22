import React from 'react'

export default function JobsListing() {
  return (
    <div className='page-wrapper'>
          <section class="page-title style-three">
      <div class="auto-container"> 
        <div class="job-search-form">
          <form method="post" action="https://creativelayers.net/themes/superio/job-list-v10.html">
            <div class="row"> 
              <div class="form-group col-lg-4 col-md-12 col-sm-12">
                <span class="icon flaticon-search-1"></span>
                <input type="text" name="field_name" placeholder="Job title, keywords, or company"/>
              </div> 
              <div class="form-group col-lg-3 col-md-12 col-sm-12 location">
                <span class="icon flaticon-map-locator"></span>
                <input type="text" name="field_name" placeholder="City or postcode"/>
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
                <button type="submit" class="theme-btn btn-style-one">Find Jobs</button>
              </div>
            </div>
          </form>
        </div> 

        <div class="top-filters">
          <div class="form-group">
            <select class="chosen-select">
              <option>Job Type</option>
              <option>New Jobs</option>
              <option>Freelance</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Temporary</option>
            </select>
          </div>

          <div class="form-group">
            <select class="chosen-select">
              <option>Date Posted</option>
              <option>New Jobs</option>
              <option>Freelance</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Temporary</option>
            </select>
          </div>

          <div class="form-group">
            <select class="chosen-select">
              <option>Experience Level</option>
              <option>New Jobs</option>
              <option>Freelance</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Temporary</option>
            </select>
          </div>

          <div class="form-group">
            <select class="chosen-select">
              <option>Salary estimate</option>
              <option>New Jobs</option>
              <option>Freelance</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Temporary</option>
            </select>
          </div>
        </div>
      </div>
    </section> 
    <section class="ls-section style-three">
      <div class="auto-container">
        <div class="filters-backdrop"></div>

        <div class="row"> 
          <div class="content-column col-lg-12">
            <div class="ls-outer"> 
              <div class="ls-switcher">
                <div class="showing-result">
                  <div class="text">Showing <strong>41-60</strong> of <strong>944</strong> jobs</div>
                </div>

                <div class="sort-by">
                  <select class="chosen-select">
                    <option>New Jobs</option>
                    <option>Freelance</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Part Time</option>
                    <option>Temporary</option>
                  </select>

                  <select class="chosen-select">
                    <option>Show 10</option>
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                    <option>Show 50</option>
                    <option>Show 60</option>
                  </select>
                </div>
              </div>

              <div class="row"> 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="assets/images/resource/company-logo/1-1.png" alt=""/></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="privacy">Private</li>
                      <li class="required">Urgent</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div> 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-2.png" alt=""/></span>
                      <h4><a href="#">Recruiting Coordinator</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="privacy">Private</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div> 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-3.png" alt=""/></span>
                      <h4><a href="#">Product Manager, Studio</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="required">Urgent</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>
 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-4.png" alt=""/></span>
                      <h4><a href="#">)Web Developer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div> 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-5.png" alt=""/></span>
                      <h4><a href="#">Senior Product Designer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>
 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-6.png" alt=""/></span>
                      <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="privacy">Private</li>
                      <li class="required">Urgent</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>
 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-7.png" alt=""/></span>
                      <h4><a href="#">Recruiting Coordinator</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="privacy">Private</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div> 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-8.png" alt=""/></span>
                      <h4><a href="#">Product Manager, Studio</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="required">Urgent</li>
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>
 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-9.png" alt=""/></span>
                      <h4><a href="#">)Web Developer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>
 
                <div class="job-block-two col-lg-12">
                  <div class="inner-box">
                    <div class="content">
                      <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""/></span>
                      <h4><a href="#">Senior Product Designer</a></h4>
                      <ul class="job-info">
                        <li><span class="icon flaticon-briefcase"></span> Segment</li>
                        <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                        <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                      </ul>
                    </div>
                    <ul class="job-other-info">
                      <li class="time">Full Time</li>
                    </ul>
                    <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                  </div>
                </div>

              </div>
 
              <div class="ls-show-more">
                <p>Showing 36 of 497 Jobs</p>
                <div class="bar"><span class="bar-inner" style={{width: "40%"}}></span></div>
                <button class="show-more">Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>
  )
}
