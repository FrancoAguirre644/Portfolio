import React, { useEffect, useState } from 'react';
import { MDBMask, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import WOW from 'wowjs';
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [emailDetails, setEmailDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_XDvVhAkd', e.target, 'user_4WAJEjCbst5IW66yG17Ga')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setEmailDetails({
            ...emailDetails, user_name: '',
            user_email: '',
            message: '',
        })
    }

    const handleChange = async e => {
        const { name, value } = e.target;

        setEmailDetails(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    return (
        <div className="row justify-content-center align-items-center pl-3 pr-3 ">
            <MDBCol md="4" >
                <MDBCard className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s">
                    <MDBCardBody>

                        <form onSubmit={(e) => handleSubmit(e)} >
                            <h2 className="text-center mb-4 mt-4 white-text">Contact</h2>
                            <hr className="hr-light" />
                            <input type="hidden" name="contact_number" />

                            <MDBInput
                                type="text"
                                name="name"
                                label="Type your name"
                                rows="2"
                                icon="envelope"
                                className="white-text"
                                iconClass="white-text"
                                value={emailDetails.user_name}
                                onChange={handleChange}
                            />
                            <div className="grey-white">
                                <MDBInput label="Type your email" name="email" icon="envelope" group type="email" className="white-text" iconClass="white-text" validate error="wrong"
                                    success="right" value={emailDetails.user_email} onChange={handleChange} />
                            </div>
                            <MDBInput
                                type="textarea"
                                name="message"
                                label="Type your message"
                                rows="2"
                                icon="envelope"
                                className="white-text"
                                iconClass="white-text"
                                value={emailDetails.message}
                                onChange={handleChange}
                            />

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

        </div>

    )
}