import React from "react";

export default function index() {
  return (
    <section className="subscribe-section-two -type-3">
      <div
        className="background-image"
        style="background-image: url(%PUBLIC_URL%/assets/images/index-13/cta/bg.png);"
      ></div>
      <div className="auto-container wow fadeInUp">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="sec-title light mb-0">
              <h2 className="text-white">Download the App</h2>
              <div className="text text-white">
                New features. New appearance. No risk and
                <br /> credit card required.
              </div>

              <div className="row buttons">
                <div className="col-auto">
                  <img src="%PUBLIC_URL%/assets/images/index-13/cta/1.svg" alt="image" />
                </div>
                <div className="col-auto">
                  <img src="%PUBLIC_URL%/assets/images/index-13/cta/2.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="image">
              <img src="%PUBLIC_URL%/assets/images/index-13/cta/1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
