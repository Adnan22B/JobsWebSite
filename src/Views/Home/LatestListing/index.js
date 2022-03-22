import React from 'react'

export default function index() {
  return (
    <>
      <section className="layout-pt-60 layout-pb-60">
      <div className="auto-container">
        <div className="row wow fadeInUp">
          <div className="featured-column col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec-title text-center">
              <h2 className="color-blue-dark fw-700">Latest Jobs</h2>
              <div className="text">Know your worth and find the job that qualify your life</div>

              <div className="mt-50">
                <ul className="switchbox -horizontal">
                  <li>
                    <label className="switch">
                      <input type="checkbox" readOnly/>
                      <span className="slider round"></span>
                      <span className="title">Freelance</span>
                    </label>
                  </li>
                  <li>
                    <label className="switch">
                      <input type="checkbox" checked readOnly/>
                      <span className="slider round"></span>
                      <span className="title">Full Time</span>
                    </label>
                  </li>
                  <li>
                    <label className="switch">
                      <input type="checkbox" readOnly/>
                      <span className="slider round"></span>
                      <span className="title">Internship</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="outer-box job-block-five-separated"> 
              <div className="job-block-five">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo"><img src="assets/images/resource/company-logo/4-1.png" alt="" /></span>
                    <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                    <ul className="job-info mb-0">
                      <li><span className="icon flaticon-briefcase"></span> Segment</li>
                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                      <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                      <li><span className="icon flaticon-money"></span> $35k - $45k</li>
                    </ul>
                  </div>
                  <ul className="job-other-info">
                    <li className="time mb-0">Full Time</li>
                  </ul>
                  <a href="#" className="theme-btn btn-dark-blue">Apply Job</a>
                </div>
              </div> 
              <div className="job-block-five">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo"><img src="assets/images/resource/company-logo/4-2.png" alt="" /></span>
                    <h4><a href="#">Recruiting Coordinator</a></h4>
                    <ul className="job-info mb-0">
                      <li><span className="icon flaticon-briefcase"></span> Segment</li>
                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                      <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                      <li><span className="icon flaticon-money"></span> $35k - $45k</li>
                    </ul>
                  </div>
                  <ul className="job-other-info">
                    <li className="time mb-0">Full Time</li>
                  </ul>
                  <a href="#" className="theme-btn btn-dark-blue">Apply Job</a>
                </div>
              </div> 
              <div className="job-block-five">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo"><img src="assets/images/resource/company-logo/4-3.png" alt="" /></span>
                    <h4><a href="#">Product Manager, Studio</a></h4>
                    <ul className="job-info mb-0">
                      <li><span className="icon flaticon-briefcase"></span> Segment</li>
                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                      <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                      <li><span className="icon flaticon-money"></span> $35k - $45k</li>
                    </ul>
                  </div>
                  <ul className="job-other-info">
                    <li className="time mb-0">Full Time</li>
                  </ul>
                  <a href="#" className="theme-btn btn-dark-blue">Apply Job</a>
                </div>
              </div> 
              <div className="job-block-five">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo"><img src="assets/images/resource/company-logo/4-4.png" alt="" /></span>
                    <h4><a href="#">Web Developer</a></h4>
                    <ul className="job-info mb-0">
                      <li><span className="icon flaticon-briefcase"></span> Segment</li>
                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                      <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                      <li><span className="icon flaticon-money"></span> $35k - $45k</li>
                    </ul>
                  </div>
                  <ul className="job-other-info">
                    <li className="time mb-0">Full Time</li>
                  </ul>
                  <a href="#" className="theme-btn btn-dark-blue">Apply Job</a>
                </div>
              </div> 
              <div className="job-block-five">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo"><img src="assets/images/resource/company-logo/4-5.png" alt="" /></span>
                    <h4><a href="#">Senior Product Designer</a></h4>
                    <ul className="job-info mb-0">
                      <li><span className="icon flaticon-briefcase"></span> Segment</li>
                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                      <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                      <li><span className="icon flaticon-money"></span> $35k - $45k</li>
                    </ul>
                  </div>
                  <ul className="job-other-info">
                    <li className="time mb-0">Full Time</li>
                  </ul>
                  <a href="#" className="theme-btn btn-dark-blue">Apply Job</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
