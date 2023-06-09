import React from "react";
import {BsBucketFill} from "react-icons/bs"

function MypageHeader(){

  return(
    <>
      <section style={{display: "flex", justifyContent:"space-between", alignItems:"center", marginTop:"3rem", border:"2px solid #D6E4E5", borderRadius:"50px", marginLeft:"1rem", marginRight:"1rem", padding:"15px 0", backgroundColor:"#fff"}}>
        <div style={{marginLeft:"2rem"}}>
          <BsBucketFill style={{color:"orange", fontSize:"2rem", marginRight:"0.5rem"}}/>
          <span style={{display:"inline-block", fontSize:"1.5rem",  transform: "translate(0, -20%)"}}>Bucket</span>
        </div>
        <div style={{marginRight:"2rem"}}>
          <button style={{padding:"8px 15px", border:"1px solid #98EECC", backgroundColor:"#98EECC", borderRadius:"10px"}}>logout</button>
        </div>
      </section>
    </>
  )
}

export default MypageHeader;