import React from 'react'
import "./download.css";
import icon_download from "./assets/icon_download.png";
import brochure from "./assets/VOCATIONS 8.0 By SARGAM Brochure 2024 (1).pdf";
import Cloud from "./assets/cloud-computing.png";

export default function Download() {
  return (
    <>

    <div className="download">
    <a href={brochure} download="Vocation_brochure">  <img src={Cloud} style={{width:"80%"}} /> </a>
    </div>
    
    
    </>
  )
}
