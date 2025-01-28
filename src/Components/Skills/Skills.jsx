import React from 'react';
import './Skills.css';

const Skills=()=>{
    return (<div  id="Skills" className='skills'>
         <h2>My Skills</h2>
        <div className='skill'>
            <h3>Programming Languages</h3>
            <div className='skill-summary'>
            <div className='about-skill-summary'><p>Python</p><hr style={{width:"85%"}}/></div>
            <div className='about-skill-summary'><p>C Programming</p><hr style={{width:"75%"}}/></div>
            <div className='about-skill-summary'><p>Java</p><hr style={{width:"72%"}}/></div>
            </div>
        </div>
        <div className='skill'>
            <h3>Frontend Proficiency</h3>
            <div className='skill-summary'>
            <div className='about-skill-summary'><p>HTML & CSS</p><hr style={{width:"85%"}}/></div>
            <div className='about-skill-summary'><p>Bootstrap</p><hr style={{width:"75%"}}/></div>
            <div className='about-skill-summary'><p>Java Script</p><hr style={{width:"88%"}}/></div>
            <div className='about-skill-summary'><p>React Js </p><hr style={{width:"70%"}}/></div>
            <div className='about-skill-summary'><p>Angular Js </p><hr style={{width:"67%"}}/></div>
            </div>
        </div>
        <div className='skill'>
            <h3>Backend Programming</h3>
            <div className='skill-summary'>
            <div className='about-skill-summary'><p>Express Js</p><hr style={{width:"65%"}}/></div>
            <div className='about-skill-summary'><p>Node Js</p><hr style={{width:"67%"}}/></div>
            </div>
        </div>
        <div className='skill'>
            <h3>Database Skills and APIs</h3>
            <div className='skill-summary'>
            <div className='about-skill-summary'><p>MySQL</p><hr style={{width:"75%"}}/></div>
            <div className='about-skill-summary'><p>MongoDB</p><hr style={{width:"77%"}}/></div>
            <div className='about-skill-summary'><p>DBMS</p><hr style={{width:"72%"}}/></div>
            <div className='about-skill-summary'><p>Postman API</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>

        </div>

    
    )
}

export default Skills;