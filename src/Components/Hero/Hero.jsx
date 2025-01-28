import react from 'react';
import './Hero.css'
import pic from '../../assets/pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Hero(){
    return (
        <div id ="Home" className="hero">
            <img src={pic} alt="Pic" />
            <h1>I'm Pakanati Vishnuvardhan Reddy.</h1>
            <p>I'm Fresher, Studied at RVR&JC College Of Engineering in the Stream of Electronics Communication and Engineering.  </p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                <div className='hero-resume'><a href='https://drive.google.com/file/d/1ldhcktCiK23y1-lznZBVhuQOYMqsisK9/view?usp=drivesdk' target='_blank' style={{textDecoration:'none',color:'white'}}>My Resume</a></div>
            </div>
        </div>
    )
}
export default Hero;