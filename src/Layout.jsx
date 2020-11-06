import React from 'react'
import './Layout.css'
import {Fade} from 'react-reveal'
import{useMediaQuery} from 'react-responsive'
const Layout=()=>{
   function click(){
var x=document.getElementById('hide')
if(x.style.display==='none'){
x.style.display='block'
document.getElementById('hide2').style.display='block'
document.getElementsByClassName('right-layout')[0].style.width='200px'
}else{
      x.style.display='none'
      document.getElementsByClassName('right-layout')[0].style.width='20px'
      document.getElementById('hide2').style.display='none'
    } 
}
const Mobile=({children})=>{
    const isMobile=useMediaQuery({maxWidth:768})
    return isMobile?children:null;
}
const Desktop=({children})=>{
    const isDesktop=useMediaQuery({minWidth:992});
    return isDesktop? children:null
  }
    return(
    <>
    <Desktop>
    <Fade>
    <section className='layout-box'>
        <div className='right-layout'>
        <section>
         <i className='fa fa-bars' onClick={click}/> 
         <div id='icon-libeary'>
         <i className='fa fa-user'/>
         <i className='fa fa-file'/>
         <i className='fa fa-image'/>
         <i className='fa fa-gear'/>
         <i className='fa fa-power-off'/>
         </div>
         </section>
        
         <section id='section-right'>
        <span id='hide2'>START</span>
         <div id='hide'>
         <p>Dell</p>
         <p>Documents</p>
         <p>Pictures</p>
         <p>Settings</p>
         <p>Power</p>
         </div>
         </section>

        </div>
        <div id='layout-box-middle'>
          <p>Recently added</p>
          <p><i className='fa fa-square-o'></i><span>Apple</span></p>
          <p><i className='fa fa-square-o'></i><span>America</span></p>
          <p><i className='fa fa-square-o'></i><span>AXX</span></p>
          <p>c</p>
          <p><i className='fa fa-square-o'></i><span>computer</span></p>
          <p><i className='fa fa-square-o'></i><span>comp file</span></p>
          <p><i className='fa fa-square-o'></i><span>computer network</span></p>
          <p>B</p>
          <p><i className='fa fa-square-o'></i><span>Ball</span></p>
          <p><i className='fa fa-square-o'></i><span>Biscake</span></p>
          <p><i className='fa fa-square-o'></i><span>Boy</span></p>
         </div>
        <div id='aside'>
            <div id='aside-1'>
           <p><a href='https://www.google.com/iharicharan' style={{textDecoration:'none',color:'white',fontSize:'50px',marginLeft:'20px'}}>
<i className='fa fa-google'/></a></p>
            <p style={{width:'184px'}}><a href='https://www.linkedin.com/in/iharicharan/' style={{textDecoration:'none',color:'white',fontSize:'50px',marginLeft:'50px'}}>
<i className='fa fa-linkedin'/></a></p>
            <p style={{marginTop:'1px'}}> <a href='https://www.twitter.com/iharicharan' style={{textDecoration:'none',color:'white',fontSize:'50px',marginLeft:'20px'}}>
<i className='fa fa-twitter'/></a></p>
            <p style={{marginTop:'1px'}}><i className='fa fa-book' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px',color:'white'}}/></p>
            <p style={{marginTop:'1px'}}><i className='fa fa-phone' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            </div>
            <div id='aside-2'>
            <p><a href='https://www.facebook.com/programmer.me1' style={{textDecoration:'none',marginLeft:'30%',color:'white',fontSize:'50px'}}>
<i className='fa fa-facebook'/></a></p>
            <p><i className='fa fa-users' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p><i className='fa fa-btc' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p style={{marginTop:'1px'}}> <a href='https://www.youtube.com' style={{textDecoration:'none',color:'white',fontSize:'50px',marginLeft:'30%',width:'100%'}}>
<i className='fa fa-youtube'/></a></p>
            <p style={{width:'250px',marginTop:'1px'}}> <i className='fa fa-camera' style={{fontSize:'50px',marginTop:'9px',marginLeft:'90px'}}/></p>
            <p style={{marginTop:'1px'}}>
   <i className='fa fa-newspaper-o' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p style={{marginTop:'1px'}}><i className='fa fa-yahoo' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p style={{marginTop:'1px'}}><i className='fa fa-android' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            </div>
            <div id='aside-3'>
            <p><i className='fa fa-apple' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p><i className='fa fa-bitbucket' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p><i className='fa fa-bluetooth' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p style={{width:'184px'}}><i className='fa fa-btc' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p>
            <p><i className='fa fa-codepen' style={{fontSize:'50px',marginTop:'9px',marginLeft:'20px'}}/></p> 
            </div>
            <div id='aside-4'>
            <p>  <a href='https://www.skype.com' style={{textDecoration:'none',color:'white',marginTop:'1px',marginLeft:'70px',fontSize:'45px'}}>
<i className='fa fa-skype'/></a></p>
            <p>
        <a href='https://www.instagram.com/technologyjokes' style={{textDecoration:'none',marginTop:'1px',marginLeft:'70px',color:'white',fontSize:'45px'}}>
<i className='fa fa-instagram'/></a></p>
            <p><i className='fa fa-gear' style={{fontSize:'50px',marginTop:'1px',marginLeft:'70px'}}/></p>
            <p><a href='https://www.reddit.com' style={{textDecoration:'none',marginLeft:'70px',marginTop:'1px',color:'white',fontSize:'45px'}}>
<i className='fa fa-reddit'/></a></p>
            </div>
            </div>
       
      
    </section>
    </Fade>
    </Desktop>
    <Mobile>
        <section id='reslayout'>
    <div style={{display:'flex'}}>
        <div>
        <div id='resfour' style={{marginTop:'14px'}}>
        <p><a href='https://www.google.com/iharicharan' style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i className='fa fa-google'/></a></p>
        <p><a href='https://www.linkedin.com/in/iharicharan/' style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i className='fa fa-linkedin'/></a></p>
       <p><a href='https://www.twitter.com/iharicharan' style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i className='fa fa-twitter'/></a></p>
        <p><i className='fa fa-book' style={{color:'white'}}/></p>
        </div>
        </div>
        <p><i className='fa fa-phone'/></p>
        <p><a href='https://www.facebook.com/programmer.me1' style={{textDecoration:'none',marginLeft:'30%',color:'white',fontSize:'50px'}}><i className='fa fa-facebook'/></a></p>
    </div>
    <div style={{display:'flex'}}>
        <p><i className='fa fa-users'/></p>
        <p><a href='https://www.youtube.com' style={{textDecoration:'none',color:'white',fontSize:'50px',marginLeft:'30%',width:'100%'}}><i className='fa fa-youtube'/></a></p>
        <p><i className='fa fa-camera'/></p>
    </div>
    <div style={{display:'flex'}}>
        <p><i className='fa fa-newspaper-o'/></p>
        <p><a href='https://www.skype.com' style={{textDecoration:'none',color:'white',marginLeft:'30%',fontSize:'50px'}}><i className='fa fa-skype'/></a></p>
       
    </div>
    <div style={{display:'flex'}}>
        <p><a href='https://www.instagram.com/technologyjokes' style={{textDecoration:'none',marginLeft:'30%',color:'white',fontSize:'50px'}}><i className='fa fa-instagram'/></a></p>
        <p><i className='fa fa-search'/></p>
        <p><a href='https://www.reddit.com' style={{textDecoration:'none',marginLeft:'30%',color:'white',fontSize:'50px'}}><i className='fa fa-reddit'/></a></p>
    </div>
    <div style={{display:'flex'}}>
        <p><i className='fa fa-home'/></p>
        <p><i className='fa fa-gear'/></p>
        
    </div>
    </section>
    </Mobile>
    </>
    );
}
export default Layout;