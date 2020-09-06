import React, { Fragment, useState } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { ServiceFrontEnd } from './ServiceFrontEnd';
import { ServiceBackEnd } from './ServiceBackEnd';

export const Services = () => {

    const [visibility, setVisibility] = useState(false);
    const [colors, setColors] = useState([{ "color": "teal" }, { "color": "green" }]);

    const handleChange = (type) => {

        if (visibility !== type) {
            setVisibility(!visibility);
        }

    }

    return (
        <Fragment>

            <MDBRow className="justify-content-center align-items-center pt-3">
                <MDBBtn outline className={"rounded " + colors[0].color} color="info" onClick={() => handleChange(false)}>Frontend</MDBBtn>
                <MDBBtn outline className={"rounded " + colors[1].color} color="success" onClick={() => handleChange(true)}>Backend</MDBBtn>
            </MDBRow>

            {
                visibility ? <ServiceFrontEnd /> : <ServiceBackEnd />
            }

        </Fragment>
    )
}