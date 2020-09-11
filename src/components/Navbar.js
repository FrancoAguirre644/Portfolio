import React, { useState } from 'react';
import { MDBNavbar, MDBIcon, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import mainLogo from '../logo.png';


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
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="linkedin" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="https://github.com/FrancoAguirre644/LoginJWT-Spring">
                                <MDBIcon fab icon="github" />
                            </MDBNavLink>
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