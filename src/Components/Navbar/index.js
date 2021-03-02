 import React from 'react'
 import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
 
 const Navbar = () => {
     return(
         <>
         <Nav>
         <NavLink to="/">
          <h1>hey hey</h1>
            </NavLink>
            
            <Bars />
            
            <NavMenu>
                <NavLink to="/about" activeStyles> About </NavLink>
                <NavLink to="/contact" activeStyles> Contact </NavLink>
                <NavLink to="/projects" activeStyles> Projects </NavLink>
                <NavLink to="/resume" activeStyles> Resume </NavLink>
            </NavMenu>
             
         </Nav>
        </>
     );
 };
 
 export default Navbar; 
 