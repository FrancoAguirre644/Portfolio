import React, { useEffect } from 'react';
import { MDBCardHeader, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import photo from '../assets/photo-about.jpg';
import Zoom from 'react-reveal/Zoom';

export const About = () => {

    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <Zoom>
            <div className="row justify-content-center align-items-center mt-5 mb-2">
                <MDBCard border="success" className="w-75 nice-green-border" style={{ width: "22rem", backgroundColor: "transparent", marginTop: "1rem" }}>
                    <MDBCardHeader color="success-color" className="nice-green" >About me</MDBCardHeader>
                    <MDBCardBody>
                        <MDBRow >
                            <MDBCol md="2" className=" d-flex align-items-center justify-content-center p-3">
                                <img className="rounded-circle z-depth-2" alt="photoUser" height="110" width="110" src={photo} />
                            </MDBCol>
                            <MDBCol >
                                <MDBCardTitle className="font-weight-bold" >Franco Aguirre</MDBCardTitle>
                                <hr className="hr-light w-100 nice-green-border" />
                                <MDBCardText >
                                    I am a software developer from Buenos Aires, Argentina. Currently studying a degree in systems in UNLa.
                                    I really enjoy both designing user interfaces and developing server-side code.
                                    Lately I am specializing in web development using the following frameworks React, Spring and Node.
                                    <br />
                                    when I'm not coding, i do other activities like playing guitar and drawing.
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