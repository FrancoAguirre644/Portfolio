import React, { useEffect } from 'react';
import { MDBCardHeader, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

export const About = () => {

    useEffect(() => {
        new WOW.WOW().init({
            live: false
        });
    }, []);

    return (
        <div className="row justify-content-center align-items-center gradient mt-5 mb-2">
            <MDBCard border="success" className="w-75 wow fadeInDown nice-green-border" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" style={{ width: "22rem", backgroundColor: "transparent", marginTop: "1rem" }}>
                <MDBCardHeader color="success-color" className="nice-green" >Featured</MDBCardHeader>
                <MDBCardBody>
                    <MDBRow >
                        <MDBCol md="2" className=" d-flex align-items-center justify-content-center p-3">
                            <img className="rounded-circle z-depth-2 wow fadeInLeft" alt="photoUser" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s" src="https://randomuser.me/api/portraits/women/21.jpg" />
                        </MDBCol>
                        <MDBCol >
                            <MDBCardTitle className="font-weight-bold" >Special title treatment</MDBCardTitle>
                            <hr className="hr-light w-100 nice-green-border" />
                            <MDBCardText >
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
                    <Link to="/services"><button class="fill text-capitalize mt-3 wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay="1s">my work </button></Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}