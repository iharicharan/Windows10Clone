import React from 'react'
import './app.css'
import win1 from './img/win1.png'
import Layout from './Layout'
import Files from './Files'

import{Route,Switch,NavLink} from 'react-router-dom'
import{useMediaQuery} from 'react-responsive'
const App=()=>{
function click(){
    var x=document.getElementById('layout');
    if(x.style.display==='none'){
      x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
 const Mobile=({children})=>{
   const isMobile=useMediaQuery({maxWidth:766});
   return isMobile? children:null
 }
 const Desktop=({children})=>{
  const isDesktop=useMediaQuery({minWidth:992});
  return isDesktop? children:null
}


  return(
    <>
   <Desktop> 
     <Switch>
     <Route exact path='/Files' component={Files}/>
     </Switch>
    
    <section className='box'>
    
   
    <div id='layout'>
     <Layout />
   </div>
   <div id='icon-libeary1'>
   <NavLink to='/Files'><i className='fa fa-desktop' id='flode'/></NavLink><br/>
    <i className='fa fa-edge' id='icon-edge'/><br/>
      <i className='fa fa-trash-o'/>
      </div>
   <footer className='box1'>
   <i className='fa fa-windows' onClick={click}/>
 <input type='text' placeholder='Type here to search' id='txt1'/>
    <img src={win1} alt='win1' id='win1'/>
<i className='fa fa-edge' id='edge'/>
<NavLink to='/Files'><i className='fa fa-folder' id='floder'/></NavLink>
<i className='fa fa-chrome' id='chrome'/>
<i className='fa fa-notepad' id='note'/>
<i className='fa fa-users' id='people'/>
<i className='fa fa-angle-up' id='angle-up'/>
<i className='fa fa-battery' id='battery'/>
<i className='fa fa-wifi' id='wifi'/>
<i className='fa fa-volume-up' id='speaker'/>
<span id='txt-1'>ENG</span> 
<span id='time_span' style={{color:'white', marginLeft:'20px'}}></span> 

   </footer>
   </section>
   <footer>
     <div className='f1'>DELL</div>
   </footer>
   </Desktop>
   <Mobile>
   <Switch>
     <Route exact path='/Files' component={Files}/>
     </Switch>
   <section id='res-header'>
<div>
<span>4G<i className='fa fa-signal' id='wifi'/></span>
<i className='fa fa-volume-up' id='speaker'/>
</div>
<div id='res-right'>
<i className='fa fa-battery' id='battery' style={{marginRight:'4px'}}/>
  <span style={{marginRight:'14px'}} id='time_span'>
</span>
</div>
</section>
   <section className='res-box'>
   
   <div id='icon-libeary1'>
 <NavLink to='/Files'><i className='fa fa-folder' style={{textDecoration:'none',color:'yellow'}}/></NavLink><br/>
 
  <a href='https://www.bing.com'><i className='fa fa-edge' id='icon-edge'/></a><br/>
      <i className='fa fa-trash-o' style={{color:'white'}}/><br/>
     
      </div>
   <div>
  <a href='https://iharicharan.github.io/calculator'><i className='fa fa-calculator' style={{color:'white',marginTop:'24px',fontSize:'30px',marginLeft:'20px'}}/></a>
   </div>
    <div id='layout'>
     <Layout/>
   </div>
   </section>
 <footer className='res-footer'>
   <div>
  <i className='fa fa-arrow-left'/>
  </div>
  <div>
 <i className='fa fa-windows' onClick={click}/>
   </div>
 <div>
 <i className='fa fa-search'/>
 </div>
</footer>
 </Mobile>
  </>
   
  );

}
export default App;