import React from 'react';
import './About.css';
import pic from '../../assets/pic.jpg';

const About=()=>{
    return (
        <div id="Details" className='about'>
            <div className='about-title'>
                <h1>
                    About me
                </h1>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={pic} alt=""/>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>As a student passionate about full-stack web development, I have developed a strong understanding of
modern web technologies, with a particular focus on React.js. My expertise in React.js enables me to
create dynamic, user-friendly interfaces and build highly responsive web applications that enhance user
experience. Additionally, I am proficient in the MEAN stack (MongoDB, Express.js, Angular, and Node.js), allowing me to manage complex web applications efficiently. My skills in Python and Java further
complement my development capabilities, providing me with a versatile approach to problem-solving and
the ability to work across different layers of software development to deliver robust and scalable
solutions.
</p>
                    </div>
                    <div className="about-education">
                        <h2>Education</h2>
                        <div className='about-education1'>
                             <h3>B.Tech.</h3>
                             <p>At <span>RVR&JC College Of Engineering</span> in the stream of <span>Electronics and Communication Engineering </span> with <span>9.20 CGPA</span></p>
                             <p><strong>Period :</strong> Dec 2021 - June 2025</p>
                        </div>
                        <div className='about-education1'>
                             <h3>Intermediate</h3>
                             <p>At <span>Future Focus Junior College</span> in the stream of <span>MPC</span> with <span>97%</span></p>
                             <p><strong>Period :</strong> June 2019 - April 2021</p>
                        </div>
                        <div className='about-education1'>
                             <h3>SSC</h3>
                             <p>At <span>ZPHS Mangapet</span> with <span>9.7 CGPA</span></p>
                             <p><strong>Period :</strong> June 2018 - March 2019</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default About;