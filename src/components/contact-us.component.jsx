import React from 'react'
import logo from '../assets/profile-picture.jpg'
import './component-styles/contact-us.styles.scss'


const ContactUs=()=>{
    
    return(
        <div className='contact-us-page'>
            <div className='portrait'><img alt='Portrait' src={logo}/></div>
            <div className='description-container'>
                <h1>About Me</h1>
                <div className='body-text'>
                    <p>Hello! Thank you for viewing my page!</p>
                    <p>My name is Connor Barroso and I am a fresh 23 year old Frontend developer specializing in React.js. 
                        <br/>
                        <br/>
                        I decided to start my journey to become a developer in December of 2020 and I am proud of how far I have come. 
                        <br/>
                        <br/>
                        I built this app myself with some resources and instruction from the udemy React.js course on Udemy, but every component was hand built by me.</p>
                </div>
                <h1>Contact Me</h1>
                <div className='body-text'>
                    <p className='email'>Email: connor.barroso@gmail.com</p>
                    <div className='links'>
                        <a className='anchor' href='https://www.facebook.com/connor.barroso.9'>Facebook</a>
                        <a className='anchor' href='https://www.linkedin.com/in/connor-barroso-926513217/'>Linkdin</a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default ContactUs