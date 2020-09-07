import React, { useState, Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { ServiceCard } from './ServiceCard';
import { Link } from 'react-router-dom';
import { dataBackend } from '../helpers/projectsBackend';

export const ServiceBackEnd = () => {

    const [data, setData] = useState(dataBackend);

    return (
        <Fragment>
            <MDBRow className="justify-content-center align-items-center pt-3">
                <Link to="/services/frontend"><MDBBtn outline className={"rounded "} color="info">Frontend</MDBBtn></Link>
                <MDBBtn outline className="rounded backend" color="success">Backend</MDBBtn>
            </MDBRow>
            <MDBRow className="justify-content-center align-items-center p-3">

                {
                    data.map((d) =>
                        <ServiceCard props={d} />
                    )
                }

            </MDBRow>
        </Fragment >
    )

}