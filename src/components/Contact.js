import React, { useEffect } from 'react';
import { MDBMask, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import WOW from 'wowjs';

export const Contact = () => {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient" >
                <MDBContainer >
                    <MDBRow className="justify-content-center" >
                        <MDBCol md="6" >
                            <MDBCard className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s">
                                <MDBCardBody>

                                    <form >
                                        <h3 className="text-center mb-4 white-text">Contact</h3>
                                        <hr className="hr-light" />
                                        <MDBInput
                                            type="textarea"
                                            label="Icon Prefix"
                                            rows="2"
                                            icon="envelope"
                                            className="white-text"
                                            iconClass="white-text"
                                        />
                                        <div className="grey-white">
                                            <MDBInput label="Type your email" icon="envelope" group type="email" className="white-text" iconClass="white-text" validate error="wrong"
                                                success="right" />
                                            <MDBInput label="Type a password" icon="lock" group type="password" className="white-text" iconClass="white-text" validate />
                                        </div>

                                        <div className="text-center py-4 mt-2">
                                            <MDBBtn className="btn btn-outline-purple" type="submit">
                                                Send
                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                            </MDBBtn>
                                        </div>
                                    </form>

                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>

            </MDBMask>
        </MDBView>
    )
}