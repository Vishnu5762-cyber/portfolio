import React from 'react';
import certificate_data from '../../assets/assets/cerificates.js';
import './certifications.css'

const Certifications=()=>{
    return( <div  id="certi" className="certifications">
        <div className="certification-title">
            <h1>Certifications</h1>
            <div className='certification-container'>
                {certificate_data.map((certificate,index)=>{
                    return <div key={index} className='certification-format'>
                        <img src={certificate.c_img} height="250px" width="500px"/>
                        <div className='certificate-format1'>
                        <h2>{certificate.c_name}</h2>
                        <h3><i>{certificate.c_org}</i></h3>
                        <p>{certificate.c_desc}</p>
                    </div>
                    </div>

                }
                )
                }
            </div>
        </div>

    </div>)
}

export default Certifications;
