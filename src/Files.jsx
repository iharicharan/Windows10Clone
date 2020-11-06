import React from 'react'
import './Files.css'
import{Route,Switch,NavLink} from 'react-router-dom'
import{useMediaQuery} from 'react-responsive'
const File=()=>{
    const folder=()=>{
        var x=document.getElementById('folder-section')
        x.style.display='none'
            document.getElementById('down').style.display='none'
            document.getElementById('up').style.display='flex'
          
            }
        
            const folder1=()=>{
                var x=document.getElementById('folder-section')
                x.style.display='grid'
                
                    document.getElementById('down').style.display='flex'
                    document.getElementById('up').style.display='none'
                    }
                    const device=()=>{
                    document.getElementById('foldersection').style.display='none'
                        
                            document.getElementById('angle-down').style.display='none'
                            document.getElementById('right').style.display='flex'
                          
                            }
                        
                            const device1=()=>{
                                document.getElementById('foldersection').style.display='grid'
                                
                                    document.getElementById('angle-down').style.display='flex'
                                    document.getElementById('right').style.display='none'
                            }


      const Mobile=({children})=>{
          const isMobile=useMediaQuery({maxWidth:767})
          return isMobile? children:null;
      }                      
      const Desktop=({children})=>{
        const isDesktop=useMediaQuery({minWidth:992})
        return isDesktop? children:null;
    } 
    const fold=()=>{
        var x=document.getElementById('foldersection1')
        x.style.display='none'
            document.getElementById('down2').style.display='none'
            document.getElementById('up2').style.display='flex'
          
            }
        
            const fold1=()=>{
                var x=document.getElementById('foldersection1')
                x.style.display='grid'
                
                    document.getElementById('down2').style.display='flex'
                    document.getElementById('up2').style.display='none'
            }                            
    return(
    <>
    <Desktop>
    <Switch>
        <Route exact path='/'/>
    </Switch>
    <div className='section-file'>
        <section id='section-top'>
        <div>
            <i className='fa fa-laptop'/>
            <i className='fa fa-file'/>
            <i className='fa fa-angle-down'/>
            <span className='fa'>This Pc</span>
            </div>
        <div>
            <i className='fa fa-minus'/>
            <NavLink to='/'><i className='fa fa-close' style={{marginRight:'14px'}}/></NavLink>
         </div>
        </section>
        <section id='section-down'>
        <div>
            <span style={{backgroundColor:'blue',padding:'3px',color:'white'}} className='fa'>File</span>
            <span style={{marginLeft:'10px'}}>Computer</span>
            <span style={{marginLeft:'10px'}}>View</span>
        </div>
        <div style={{marginRight:'15px'}}>
            <i className='fa fa-angle-down' style={{marginLeft:'15px'}}/>
            <span style={{marginLeft:'10px'}}>?</span>
        </div>
        </section>
        <section id='section-middle'>
        <div className='arrow-section'>
            <i className='fa fa-arrow-left'/>
            <i className='fa fa-arrow-right'/>
            <i className='fa fa-angle-down'/>
            <i className='fa fa-arrow-up'/>
        </div>
        <div id='box'>
            <i className='fa fa-laptop'/>
            <i className='fa fa-angle-right'/>
<input type='text' placeholder='This Pc'/>
<i className='fa fa-angle-down'/>
<i className='fa fa-refresh'/>
        </div>
        <div id='box1'>
            <input type='text' placeholder='search this pc'/>
            <button id='button'>
            <i className='fa fa-search' style={{color:'black'}}/>
            </button>
        </div>
        </section>
        <section className='section-down'>
        <div className='section-down-left'>
        <p><i className='fa fa-star-o' style={{marginRight:'4px'}}/>Quick access</p>
<p><i className='fa fa-cloud'  style={{marginRight:'4px'}}/>OneDrive</p>
<p id='pc'><i className='fa fa-laptop'  style={{marginRight:'4px'}}/>ThisPc</p>
<p><i className='fa fa-globe' style={{marginRight:'4px'}}/>Network</p>
        </div>
        <div>
        <div>
          <div id='icon-section' >
              <i className='fa fa-angle-down' id='down' onClick={folder}/>
              <i className='fa fa-angle-right' id='up' style={{display:'none',fontSize:'15px'}} onClick={folder1}/><span style={{marginLeft:'10px'}}>Folders(7)</span>
              </div>
       <div id='folder-section'>
 <span><i className='fa fa-folder-open'/>3D Objects</span>
<span><i className='fa fa-folder-open'/>Desktop</span>
<span><i className='fa fa-folder-open'/>Documents</span>
<span><i className='fa fa-folder-open'/>Downloads</span>
<span><i className='fa fa-folder-open'/>Music</span>
<span><i className='fa fa-folder-open'/>Pictures</span>
    </div>    
    </div>
    <div>
          <div id='resiconsection' >
              <i className='fa fa-angle-down' id='angle-down' onClick={device}/>
              <i className='fa fa-angle-right' id='right' style={{display:'none',fontSize:'15px'}} onClick={device1}/>
              <span style={{marginLeft:'10px'}}>Devices and Drives(5)</span>
              </div>
       <div id='foldersection'>
 <span ><i className='fa fa-hdd-o'/>Local Disk(C:)
 <p><meter id ='m1'value='8' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(D:)
<p><meter id ='m1'value='3' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(E:)
<p><meter id ='m1'value='5' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(F:)
<p><meter id ='m1'value='4' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(G:)
<p><meter id ='m1'value='6' max='10'/></p></span>

    </div>    
    </div>
    </div>
        </section>
        </div>
        </Desktop>
        <Mobile>
        <Switch>
        <Route exact path='/'/>
    </Switch> 
        <section id='section-file'> 
        <article id='sectionflex'>
         
           <div className='boxflex'>
            <i className='fa fa-laptop'/>
            <i className='fa fa-angle-right'/>
<span>This Phone</span>

        </div>
            <div>
        <NavLink to='/'><i className='fa fa-close' id='faclose' style={{textDecoration:'none'}}/></NavLink>
        </div>
        </article>
        <article id='sectionflex1'>
       
       
          <div id='iconsection1' >
              <i className='fa fa-angle-down' id='down2' onClick={fold} style={{fontWeight:'900',fontSize:'25px'}}/>
              <i className='fa fa-angle-right' id='up2'  onClick={fold1} style={{fontWeight:'900',fontSize:'25px'}}/>
              <span style={{fontWeight:'900',fontSize:'18px',marginLeft:'19%'}}>Devices and Drives(5)</span>
              </div>
       <div id='foldersection1' style={{marginTop:'20px'}}>
 <span ><i className='fa fa-hdd-o'/>Local Disk(C:)
 <p><meter id ='m2'value='8' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(D:)
<p><meter id ='m2'value='3' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(E:)
<p><meter id ='m2'value='5' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(F:)
<p><meter id ='m2'value='4' max='10'/></p></span>
<span><i className='fa fa-hdd-o'/>Local Disk(G:)
<p><meter id ='m2'value='6' max='10'/></p></span>

    </div>    
    
    
        </article>
        <article id='resfolders'>
        <div id='iconsection' >
              <i className='fa fa-angle-down' id='down' onClick={folder} style={{fontSize:'25px',fontWeight:'900'}}/>
              <i className='fa fa-angle-right' id='up' style={{display:'none',fontSize:'25px'}} onClick={folder1}/>
              <span style={{marginLeft:'26%',fontSize:'18px',fontWeight:'900'}}>Folders(7)</span>
              </div>
       <div id='folder-section' style={{marginTop:'20px',marginLeft:'10px'}}>
 <span><i className='fa fa-folder-open'/>3D Objects</span>
<span><i className='fa fa-folder-open'/>Desktop</span>
<span><i className='fa fa-folder-open'/>Documents</span>
<span><i className='fa fa-folder-open'/>Downloads</span>
<span><i className='fa fa-folder-open'/>Music</span>
<span><i className='fa fa-folder-open'/>Pictures</span>
    </div>    
        </article>
        </section>
        </Mobile>
    </>
    );
    }
    export default File;