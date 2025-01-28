import React from 'react';
import './Projects.css'
import Projects_Data from '../../assets/assets/Projects_data';
const Projects=()=>{
    return(
        <div id="Projects" className='projects'>
            <div className='project-title'>
                <h1>My Projects</h1>
            </div>
            <div className='project-container'>
                {Projects_Data.map((project,index)=>{
                    return <div key={index} className='projects-format'>
                        <img src={project.p_img} height="300px" width="400px"/>
                        <div className='projects-format1'>
                        <h3>{project.p_no}</h3>
                        <h2>{project.p_name}</h2>
                        <p>{project.p_desc}</p>
                        <p><strong>Technologies used:</strong> {project.p_tech}</p></div>
                    </div>

                }
                )
                }
            </div>
        </div>
    )
}

export default Projects
