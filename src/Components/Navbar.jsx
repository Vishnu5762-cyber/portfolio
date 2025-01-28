import { useRef } from 'react';
import React, { useState }  from "react";
import './Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll"

const logo='./profile_logo.jpg'
const menu_open='./menu_open.svg';
const menu_close='./menu_close.svg';
const Navbar=()=> {
    const [menu,setMenu]= useState("Home");
    const menuRef=useRef();

    const openMenu=()=>{
      menuRef.current.style.right="0";
    }

    const closeMenu=()=>{
      menuRef.current.style.right="-350px";
    }
    return(
        <div className="navbar">
          <img src={logo} alt="/" className='profile_logo' />
          <img src={menu_open} onClick={openMenu} alt="" height="50px" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close}  onClick={closeMenu}  alt=""  className="nav-mob-close"/>
            <li><AnchorLink className='anchor-link' offset={50} href='#Home'><p onClick={()=>setMenu("Home")} style={
              menu === "Home"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Details'><p onClick={()=>setMenu("Details")} style={
              menu === "Details"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Details</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Projects'><p onClick={()=>setMenu("Projects")} style={
              menu === "Projects"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Skills'><p onClick={()=>setMenu("Skills")} style={
              menu === "Skills"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#certi'><p onClick={()=>setMenu("certi")} style={
              menu === "certi"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Certifications</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} style={
              menu === "contact"
                ? {
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }
                : {}
            }>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>  
      );
    }

export default Navbar;