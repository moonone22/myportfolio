import React, { useState } from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg"
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Svg = styled.svg`
  width:50px;
  height:50px;
`;

const Sidebar = () => {
  const [toggle,showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>

<a href='#home' className='nav_logo'>
<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<motion.path   
initial={{opacity:0,pathLength:0,fill:"rgba(255,255,255,0)"}}
animate={{
  pathLength:1,
  fill:"rgba(230,220,20,1)",
  opacity:1,
}}
transition={{
  default:{duration:5},
  fill:{duration:2,delay:5}
}}
stroke="black"
strokeWidth="5"
fill="blue"d="M248.443,242.685c0-52.318,28.516-97.945,70.832-122.289c-15.757-6.601-33.055-10.26-51.21-10.26  c-73.204,0-132.549,59.341-132.549,132.549c0,73.201,59.341,132.549,132.549,132.549c18.155,0,35.453-3.663,51.21-10.267  C276.96,340.63,248.443,294.995,248.443,242.685z"/>

</Svg>
<p>Portfolio</p>
</a>

<nav className='nav'>
<div className='nav_menu'>
  <ul className='nav_list'>

    <li className="nav_item">
      <a href="#home" className="nav_link">
        <i className="icon-home"></i>
      </a>
    </li>

    <li className="nav_item">
      <a href="#about" className="nav_link">
        <i className="icon-user-following"></i>
      </a>
    </li>

    <li className="nav_item">
      <a href="#services" className="nav_link">
        <i className="icon-briefcase"></i>
      </a>
    </li>

    <li className="nav_item">
      <a href="#resume" className="nav_link">
        <i className="icon-graduation"></i>
      </a>
    </li>

    <li className="nav_item">
      <a href="#portfolio" className="nav_link">
        <i className="icon-layers"></i>
      </a>
    </li>


  </ul>
</div>
</nav>

<div className="nav_footer">
<span className="copyright">&copy; 2022 - 10</span>
</div>
</aside>

<div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
  <i className="icon-menu"></i>
</div>
    </>
  )
}

export default Sidebar