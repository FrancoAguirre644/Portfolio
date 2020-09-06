import React, { useEffect } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer
} from "mdbreact";
import WOW from 'wowjs';

export const Home = () => {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <div className="justify-content-center align-items-center ">
            <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                    <h3 className="display-3 font-weight-bold mb-0 pt-md-2 wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s">
                        Creative Agency{" "}
                    </h3>

                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header mt-2 mb-4 wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        deleniti consequuntur nihil.
                            </h4>

                    <MDBBtn outline rounded color="teal" className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".9s">
                        <MDBIcon icon="home" /> Visit us
                            </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>

    )
}