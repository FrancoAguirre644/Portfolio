import React, { useState } from 'react';
import { MDBNavbar, MDBIcon, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline } from "mdbreact";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <MDBNavbar color="unique-color-dark" dark fixed expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <MDBNavLink to={"/"}>
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
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
                            <MDBNavLink to={"/services"}>Services</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"/contact"}>Contact</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="https://github.com/FrancoAguirre644/LoginJWT-Spring">
                                <MDBIcon fab icon="github" />
                            </MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>

        </MDBNavbar>


    )

}