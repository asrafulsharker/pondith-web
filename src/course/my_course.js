import React from 'react'
import Course_nav from './course_nav';
import { AiFillStar } from 'react-icons/ai';
import progress from '../images/progress.png'
import more from '../images/progress.png'
import skill from '../images/skill.png'
import study from '../images/study.png'
import audiobook from '../images/audiobook.png'
import blog from '../images/blog.png'
import winning from '../images/winning.png'
import line2 from '../images/Line2.png';
import ilastator from '../images/ilastator.jpg';
import{ Card,Button} from 'react-bootstrap'
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
                    <div style={{padding:"3%"}} className="col-md-9">
                        <p style={{paddingTop:"15px",color:"rgba(128, 118, 118, 1)"}}>Featured <strong style={{color:"#FF4E23"}}>Course</strong></p>
                        <img className="featured-line"  src={line2}/>
                        <hr className="hr"/>
                    

                    <div className="row">


{/* 

                    <div class="card">
    <div class="image">
      <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>Someone famous<br/><span>team leader</span></h1>
        <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
        <ul>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div>

 */}













                        {/* <div className="card">
                            <div className="card-image">
                                <img  src={ilastator}/>
                            </div>
                            <ul className="social-icons">
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                            </ul>
                            <div className="details">
                                <h2>Nirob <span>Web developer</span></h2>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img  src={ilastator}/>
                            </div>
                            <ul className="social-icons">
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                            </ul>
                            <div className="details">
                                <h2>Nirob <span>Web developer</span></h2>
                            </div>
                        </div> */}

                        <div className="card">
                            <div className="card-image">
                                <img src={ilastator}/>
                            </div>
                            <ul className="social-icons">
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                            </ul>
                            <div className="details">
                                <h2>Nirob <span>Web developer</span></h2>
                            </div>
                        </div>

                        {/* <div className="card">
                            <div className="card-image">
                                <img src={ilastator}/>
                            </div>
                            <ul className="social-icons">
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                                <li><a href="#"><AiFillStar/></a></li>
                            </ul>
                            <div className="details">
                                <h2>Nirob <span>Web developer</span></h2>
                            </div>
                        </div> */}
                        <div className="card">
                            
                            </div>
                        {/* <div className="col-md-2">
                            
                            {/* <div class="card middle">
                                <div className="front">
                                    <img src={ilastator}/>
                                </div>
                                <div className="back">
                                    <div className="back-content middle">
                                        <h2>Dark Code</h2>
                                        <span>practice</span>
                                        <div className="sm">
                                            <a href="#"><AiFillStar/></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                        {/* <div className="col-md-2 ">
                            
                        <Card style={{ width: '18rem' }}>
                        <div class="card middle">
                                <div className="front">
                                    <img src={ilastator}/>
                                </div>
                                <div className="back">
                                    <div className="back-content middle">
                                        <h2>Dark Code</h2>
                                        <span>practice</span>
                                        <div className="sm">
                                            <a href="#"><AiFillStar/></a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                        </div> */}
                    </div>
                    </div>
                    
                    </div>

                </div>
                
            </div>
        
    )
}

export default course_home;
