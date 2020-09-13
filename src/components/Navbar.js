import React, { useState } from 'react';
import { MDBNavbar, MDBIcon, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import mainLogo from '../assets/logo.png';

export const Navbar = ({ checkboxTheme }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <MDBNavbar color="danger" style={{ backgroundColor: "black" }} dark expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <MDBNavLink to={"/"}>
                        <img src={mainLogo} height="40" alt="logo" />
                    </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar >
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to={"/"}>Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"/about"}>About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"/works"}>Works</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"/contact"}>Contact</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="waves-effect waves-light mt-2 mx-2 text-white" href="https://www.linkedin.com/in/franco-aguirre-6b5739194/"><MDBIcon fab icon="linkedin" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="waves-effect waves-light mt-2 mr-2 text-white" href="https://github.com/FrancoAguirre644"><MDBIcon fab icon="github" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            {checkboxTheme}
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>


    )

}