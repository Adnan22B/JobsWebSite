import React from 'react'

export default function index() {
  return (
    <>
         <section  className="layout-pt-60 layout-pb-60">
      <div  className="auto-container">
        <div  className="row justify-content-center">
          <div  className="col-lg-5">
            <div  className="sec-title text-center">
              <h2>How It Works?</h2>
              <div  className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
            </div>
          </div>
        </div>

        <div  className="row grid-base wow fadeInUp"> 
          <div  className="col-lg-4 col-md-6 col-sm-12">
            <div  className="work-block -type-2 mb-0">
              <div  className="inner-box">
                <div  className="icon-wrap -blue">
                  <span  className="icon icon-case"></span>
                </div>
                <h5>Register an account to start</h5>
                <p>Achieve virtually any design and layout from within the one template.</p>
              </div>
            </div>
          </div> 
          <div  className="col-lg-4 col-md-6 col-sm-12">
            <div  className="work-block -type-2 mb-0">
              <div  className="inner-box">
                <div  className="icon-wrap -red">
                  <span  className="icon icon-contact"></span>
                </div>
                <h5>Explore over thousands of resumes</h5>
                <p>Achieve virtually any design and layout from within the one template.</p>
              </div>
            </div>
          </div> 
          <div  className="col-lg-4 col-md-6 col-sm-12">
            <div  className="work-block -type-2 mb-0">
              <div  className="inner-box">
                <div  className="icon-wrap -yellow">
                  <span  className="icon icon-doc"></span>
                </div>
                <h5>Find the most suitable candidate</h5>
                <p>Achieve virtually any design and layout from within the one template.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
