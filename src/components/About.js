import React from 'react';
import { MDBCardHeader, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

export const About = () => {

    return (
        <Zoom>
            <div className="row justify-content-center align-items-center mt-5 mb-2">
                <MDBCard border="success" className="w-75" style={{ width: "22rem", backgroundColor: "transparent", marginTop: "1rem" }}>
                    <MDBCardHeader color="success-color" className="nice-green" >Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBRow >
                            <MDBCol md="2" className=" d-flex align-items-center justify-content-center p-3">
                                <img className="rounded-circle z-depth-2" alt="photoUser" src="https://randomuser.me/api/portraits/women/21.jpg" />
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
                        <Link to="/works"><button className="fill text-capitalize mt-3">my work </button></Link>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </Zoom>

    )
}