import React, { Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { ServiceCard } from './ServiceCard';
import { Link } from 'react-router-dom';
import { dataFrontend } from '../helpers/data/projectsFrontend';
import Slide from 'react-reveal/Slide';

export const ServiceFrontEnd = () => {

    return (
        <Fragment>
            <MDBRow className="justify-content-center align-items-center pt-3">
                <MDBBtn outline className="rounded frontend" color="info">Frontend</MDBBtn>
                <Link to="/works/backend"><MDBBtn outline className={"rounded "} color="success">Backend</MDBBtn></Link>
            </MDBRow>
            <Slide bottom cascade >

                <MDBRow className="justify-content-center align-items-center p-3">

                    {
                        dataFrontend.map((d, i) =>
                            <ServiceCard props={d} key={i} />
                        )
                    }

                </MDBRow>

            </Slide>

        </Fragment>
    )

}