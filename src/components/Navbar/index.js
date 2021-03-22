import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
           <NavbarContainer>
               <NavLogo to="/">Islam</NavLogo>
               <MobileIcon onClick={toggle}>
                 <FaBars />  
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                     <NavLinks to="/about" >about</NavLinks> 
                   </NavItem>
                   <NavItem>
                     <NavLinks to="/discover" >discover</NavLinks> 
                   </NavItem>
                   <NavItem>
                     <NavLinks to="/services" >services</NavLinks> 
                   </NavItem>
                   <NavItem>
                     <NavLinks to="/SignUp" >signup</NavLinks> 
                   </NavItem>
               </NavMenu>
               <NavBtn>
                 <NavBtnLink to="/signin">signin</NavBtnLink>
               </NavBtn>
           </NavbarContainer> 
        </Nav>
        </>
    )
}

export default Navbar
