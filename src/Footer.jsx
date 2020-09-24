import React,{Component} from 'react'

import './footer.css'

class Footer extends Component{
  
  render(){
        

return(
  <>
  
  <footer className='footer4'>

    <div>
      <h5>ABOUT</h5>
      <p>Our Company</p>
      <p>About Us</p>
      <p>Terms of Services</p>
      <p>Our Team</p>
    </div>
    <div className='side1'>
      
      <h5>CONTACT</h5>
      <p><big>Email</big></p>
      <p style={{color:'#e2d8d8'}}>Programmer.me@gmail.com</p>
      <p><big>Phone</big></p>
      <p style={{color:'#e2d8d8'}}>8184913243</p>
      <p><big>Address</big></p>
<p style={{color:'#e2d8d8'}}>AndhraPradesh</p>
<p style={{color:'#e2d8d8'}}>India</p>

    </div>
    <div>
      <h5>SUPPORT</h5>
      <p style={{color:'#e2d8d8'}}>Become A Partner</p>
      <p style={{color:'#e2d8d8'}}>Become A Author</p>
    </div>
    <div>
      <h5 id='side'>SUBSCRIBE US</h5>
      <p id='side'>
        <input type='email' placeholder='Enter Email'/><br/>
        <input type='submit' value='Subscribe'/>
      </p>
      <p className='side3'>
        <i className="fa fa-facebook-square" id='icon' ></i>
        <i className="fa fa-twitter-square" id='icon'></i>
        <i className="fa fa-instagram" id='icon'></i>
        <i className="fa fa-google-plus-square" id='icon'></i>
        <i className="fa fa-reddit-square" id='icon'></i></p>
    </div>
   
  </footer>
  <footer className='footer1'>
  
    <div>
      <h5>SUBSCRIBE</h5>
      <p>Receive course news and updates in your inbox</p><br/>
      <input type='email' placeholder='Enter Email' style={{width:'220px'}}/>
      <input type='submit' value='SUBSCRIBE' style={{width:'100px',padding:'7px'}}/>
    </div>
    <div>
      <h5>Designed By</h5>
      <p>HariCharan</p>
      </div>
     
      <div>
      <h5>CourseLocater</h5>
      <p>Find a course </p>
      <input type='submit'value='Find A STORE' style={{width:'100px',padding:'5px',fontSize:'13px'}}/>
    </div>
  
    </footer>
    
  
  
  </>
);
  }
}
export default Footer;