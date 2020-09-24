import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import twitter from './twitter.jpg'
const Nav=()=>{
  
    function click(){
        var x=document.getElementById('form')
        if(x.style.display==='none'){
          x.style.display='block'        
        }
           else{
          x.style.display='none'
        }
       }
       
      function side(){
          document.getElementById('resposiveright').style.display='flex'
          document.getElementById('resposiveright').style.flexDirection='column'
          document.getElementById('open').style.display='none'
document.getElementById('close').style.display='flex'
document.getElementById('close').style.justifyContent='flex-end'
          }
      function side1(){
        document.getElementById('resposiveright').style.display='none'
        document.getElementById('open').style.display='block'
        document.getElementById('close').style.display='none'
      
      }
      const Desktop=({children})=>{
        const isDesktop=useMediaQuery({minWidth:992})
        return isDesktop?children:null
      }
      const Mobile=({children})=>{
        const isMobile=useMediaQuery({maxWidth:766})
        return isMobile?children:null

      }
     const twt={
       width:'130px',
       borderRadius:'50%',
       padding:'20px'
     };
     const h2=()=>{
       document.getElementById('h2').innerHTML=window.location.replace('http://localhost:3000/About')
       document.getElementById('resposiveright').style.display='none'
       document.getElementById('close').style.display='none'
       document.getElementById('open').style.display='block'
     }
     const h3=()=>{
      document.getElementById('h3').innerHTML=window.location.replace('http://localhost:3000/Service')
      document.getElementById('resposiveright').style.display='none'
      document.getElementById('close').style.display='none'
      document.getElementById('open').style.display='block'
    }
    const h4=()=>{
      document.getElementById('h4').innerHTML=window.location.replace('http://localhost:3000/Contact')
      document.getElementById('resposiveright').style.display='none'
      document.getElementById('close').style.display='none'
      document.getElementById('open').style.display='block'
    }
    const h1=()=>{
      document.getElementById('h1').innerHTML=window.location.replace('http://localhost:3000/')
      document.getElementById('resposiveright').style.display='none'
      document.getElementById('close').style.display='none'
      document.getElementById('open').style.display='block'
    }
    const fbook=()=>{
      document.getElementById('fbook').innerHTML=window.location.replace('https://facebook.com/programmer.me1/')
      document.getElementById('resposiveright').style.display='none'
    }
    const tbook=()=>{
      document.getElementById('tbook').innerHTML=window.location.replace('https://twitter.com/iharicharan/')
      document.getElementById('resposiveright').style.display='none'
    }
    const lbook=()=>{
      document.getElementById('lbook').innerHTML=window.location.replace('https://www.linkedin.com/in/iharicharan/')
      document.getElementById('resposiveright').style.display='none'
    }
    return(
        <>
     <Desktop>
        <section className='navbar'>
            <div className='navbar1'>
                <a href='http://localhost:3000/' style={{textDecoration:'none',color:'black',fontSize:'30px'}}>BookFace</a>
            </div>
            <div className='navbar2'>
             <span><i className='fa fa-home' style={{fontSize:'25px'}}></i>
         <NavLink to ='/' style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}} >HOME</NavLink></span> 
         
        <span><i className='fa fa-address-card'></i>
         <NavLink to ='/About'  style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}}>ONLINECOURSES</NavLink></span>
         
         <span><i className='fa fa-car'></i>
 <NavLink to ='/Service' style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}}>ABOUT</NavLink></span>
 <span><i className='fa fa-address-book'></i>
 <NavLink to ='/Contact' style={{textDecoration:'none',color:'rgb(85, 17, 85)',fontSize:'17px'}}>CONTACT</NavLink></span>
            </div>
          <div className='navbar3'>
        <button onClick={click} className='login'>Login/Signup</button>
            </div>
          
        </section>
      </Desktop>
      
      <Mobile>
      <section className='resposive'>
            <div className='resposive-center' style={{boxShadow:'0 2px 2px #00000049'}}>
                  <i className="fa fa-bars" onClick={side} id='open'></i>
                <i className="fa fa-close" id='close' onClick={side1}></i>
             <center> <a href='http://localhost:3000/' style={{textDecoration:'none',color:'black',fontSize:'35px',marginLeft:'10px'}} >BookFace</a>
               </center>
            </div>
          <div className='resposive-button'>
        
        </div>
        </section>
        <section>
        <div id='resposiveright'>

<p style={{borderBottom:'1px solid rgba(255, 255, 255, 0.17)'}}>
 
  <img src={twitter} style={twt} alt='twitter'/>
  
  
 <i className="fa fa-facebook-square"  id='fbook' onClick={fbook}></i>
 <i className="fa fa-twitter-square"  id='tbook' onClick={tbook}></i>
 <i className="fa fa-linkedin-square"  id='lbook' onClick={lbook}></i>
 
 
</p><section id='center'>
  <div><i className='fa fa-home' ></i>
      <NavLink to ='/' style={{textDecoration:'none',color:'white'}} id='h1' onClick={h1}>HOME</NavLink></div>
      <div><i className='fa fa-address-card' ></i>
         <NavLink to ='/About'  style={{textDecoration:'none',color:'white'}} id='h2' onClick={h2}>ONLINECOURSES</NavLink></div>
         <div><i className='fa fa-car' ></i>
 <NavLink to ='/Service' style={{textDecoration:'none',color:'white'}} id='h3' onClick={h3}>ABOUT</NavLink></div>
 <div><i className='fa fa-address-book' ></i>
 <NavLink to ='/Service' style={{textDecoration:'none',color:'white'}} id='h4' onClick={h4}>CONTACT</NavLink></div>
</section>
            </div>
        </section>
      </Mobile>
       
       
        
       </> 
          
    );
}
export default Nav;