import React, { Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { ServiceCard } from './ServiceCard';
import { Link } from 'react-router-dom';
import { dataBackend } from '../helpers/data/projectsBackend';
import Slide from 'react-reveal/Slide';

export const ServiceBackEnd = () => {

    return (
        <Fragment>
            <MDBRow className="justify-content-center align-items-center pt-3">
                <Link to="/works/frontend"><MDBBtn outline className={"rounded"} color="info">Frontend</MDBBtn></Link>
                <MDBBtn outline className="rounded backend" color="success">Backend</MDBBtn>
            </MDBRow>
            <Slide bottom cascade >

                <MDBRow className="justify-content-center align-items-center p-3">

                    {
                        dataBackend.map((d, i) =>
                            <ServiceCard props={d} key={i} />
                        )
                    }

                </MDBRow>

            </Slide>

        </Fragment>
    )

}