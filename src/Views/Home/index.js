import React from 'react'
import Banner from "./Banner/index";
import LatestListing from "./LatestListing/index";
import HowItWorks from "./HowItWorks/index";
import NewsLetter from "./NewsLetter/index" 
export default function index() {
  return (
    <React.Fragment >
        <Banner />
        <HowItWorks />
        <LatestListing /> 
    </React.Fragment>
  )
}

