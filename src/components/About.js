import React, { useEffect } from 'react';
import { MDBMask, MDBContainer, MDBCardHeader, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact'
import WOW from 'wowjs';


export const About = () => {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <MDBView>
            <MDBMask className="row justify-content-center align-items-center gradient ">
                <MDBCard border="success" className="w-75 wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" style={{ width: "22rem", backgroundColor: "transparent", marginTop: "1rem" }}>
                    <MDBCardHeader color="success-color" >Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBRow >
                            <MDBCol md="2" className=" d-flex align-items-center justify-content-center p-3">
                                <img className="rounded-circle z-depth-2 wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s" src="https://randomuser.me/api/portraits/women/21.jpg" />
                            </MDBCol>
                            <MDBCol >
                                <MDBCardTitle className="text-white">Special title treatment</MDBCardTitle>
                                <hr className="hr-light w-100" />
                                <MDBCardText className="text-white">
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    <br />
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    <br />
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    <br />
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                    With supporting text below as a natural lead-in to additional
                                    content.
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn className="mt-3" color="success" outline >go somewhere</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBMask>
        </MDBView >
    )
}