import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRouts} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/Discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="/Services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>
                        signup
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouts to="/signin">Sign In</SidebarRouts>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
