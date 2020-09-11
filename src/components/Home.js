import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';

export const Home = () => {

    return (
        <div className="justify-content-center align-items-center mt-6">
            <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                    <LightSpeed>
                        <h3 className="display-3 font-weight-bold mb-0 pt-md-2">
                            Creative Agency
                        </h3>

                        <hr className="hr-light my-4 w-75 pink" />
                        <h4 className="subtext-header mt-2 mb-4"  >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            deleniti consequuntur nihil.
                        </h4>

                        <Link to="/about"><button className="offset text-uppercase">about me</button></Link>
                    </LightSpeed>
                </MDBCol>
            </MDBRow>
        </div>

    )
}