import React from 'react'
import Form from './Form'
function Contact() {
    const flex = {
        display: 'flex',
        flexWrap: 'wrap'

    }
    const hari = {
        color: 'black',
        marginTop: '200px',
        fontSize: '30px',
        display:'block',
        marginLeft:'70px'
    }
    return (
        <>

            <main style={flex}>
                <div id='form' style={{ display: 'none', marginTop: '100px' }} >
                    <Form /></div>
                <div style={hari}>
                    <a href='https://www.facebook.com/programmer.me1' style={{textDecoration:'none',color:'black'}}>
                    <i className='fa fa-facebook-square'></i>Facebook</a><br/>
                    <a href='https://www.twitter.com/iharicharan' style={{textDecoration:'none',color:'black'}}> <i className='fa fa-twitter-square'>
                        </i>Twitter</a><br/>
                    
                    <a href='https://www.instagram.com/technologyjokes' style={{textDecoration:'none',color:'black'}}> 
                    <i className='fa fa-instagram'></i>Instagram</a><br/>
                    
                    <a href='https://www.linkedin.com/iharicharan' style={{textDecoration:'none',color:'black'}}>
                        <i className='fa fa-linkedin-square'></i>LinkedIn</a>
                </div>
            </main>
        </>
    );
}
export default Contact;