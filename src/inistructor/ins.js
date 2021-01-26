import React from 'react'
import Course_nav from '../course/course_nav';
import { AiFillStar } from 'react-icons/ai';
import progress from '../images/progress.png'
import more from '../images/progress.png'
import skill from '../images/skill.png'
import study from '../images/study.png'
import audiobook from '../images/audiobook.png'
import blog from '../images/blog.png'
import winning from '../images/winning.png'
import line2 from '../images/Line2.png';
import background from '../images/ilastator.jpg';
import{ Card,Button} from 'react-bootstrap'
function ins() {
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
                    
                    <div  className="col-md-3  ">

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

                        <div className="left-sm-box-course">
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                 <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={skill}/>
                                  <p style={{marginLeft:"5%"}}>Skill</p>
                        </div>
                        </a>
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={study}/>
                                 <p style={{marginLeft:"5%"}}>Study</p>
                           </div>
                        </a>
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={winning}/>
                                 <p style={{marginLeft:"5%"}}>Winning</p>
                           </div>
                        </a>
                        <a className="row-h" href="#" style={{textDecoration:"none"}}>
                        <div className="row left-course-sm-row ">
                                <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={audiobook}/>
                                 <p style={{marginLeft:"5%"}}>Audiobook</p>
                           </div>
                        </a>
                        <a className="row-h" href="#" style={{textDecoration:"none",paddingBottom:"20%"}}>
                        <div className="row left-course-sm-row ">
                                <img className="" style={{height:"25px" ,marginLeft:"8%"}} src={blog}/>
                                 <p style={{marginLeft:"5%"}}>Blog</p>
                           </div>
                        </a>

                            <a style={{textDecoration:"none"}} className="progress-btn" href="#">Check</a>

                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="container">
                            <div className="ins-box">
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                        )
                    }
                    

export default ins;