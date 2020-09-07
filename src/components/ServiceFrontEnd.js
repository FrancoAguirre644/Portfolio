import React, { useState, Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { ServiceCard } from './ServiceCard';
import { Link } from 'react-router-dom';
import { dataFrontend } from '../helpers/projectsFrontend'

export const ServiceFrontEnd = () => {

    const [data, setData] = useState(dataFrontend);

    return (
        <Fragment>
            <MDBRow className="justify-content-center align-items-center pt-3">
                <MDBBtn outline className="rounded frontend" color="info">Frontend</MDBBtn>
                <Link to="/services/backend"><MDBBtn outline className={"rounded "} color="success">Backend</MDBBtn></Link>
            </MDBRow>
            <MDBRow className="justify-content-center align-items-center p-3">

                {
                    data.map((d) =>
                        <ServiceCard props={d} />
                    )
                }

            </MDBRow>
        </Fragment>
    )

}