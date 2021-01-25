import React from 'react'
import Course_nav from './course_nav';
import progress from '../images/progress.png'
function course_home() {
    return (
        <div>
            <Course_nav/>
            <div className="container">
                <div className="row m-auto"  style={{borderBottom:"1px solid #807676",alignItems:"center",paddingTop:"8px",paddingBottom:"3px"}}>
                    <p className="m-auto" style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px",}}>Design</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676" ,textAlign:"center",fontSize:"20px"}}>SEO & Digital Marketing</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px"}}>Web Design</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px"}}>Web Development</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px"}}>Apps Development</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px"}}>Academic </p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",borderRight:"1px  solid #807676",textAlign:"center",fontSize:"20px"}}>Marketplace</p>
                    <p className="m-auto"  style={{color:"rgba(128, 118, 118, 1)",padding:"4px 5px",textAlign:"center",fontSize:"20px"}}>Religion</p>
                    
                </div>
                <div className="row">
                    
                    <div  className="col-md-2  ">
                        <div className="left-sm-box-course">
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                 <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={progress}/>
                                  <p style={{marginLeft:"5%"}}>Progress</p>
                        </div>
                        </a>
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={progress}/>
                                 <p style={{marginLeft:"5%"}}>More</p>
                           </div>
                        </a>
                        </div>

                    </div>
                    
                    </div>

                </div>
                
            </div>
        
    )
}

export default course_home;
