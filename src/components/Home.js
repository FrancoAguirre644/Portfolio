import React, { useEffect } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

export const Home = () => {

    useEffect(() => {
        new WOW.WOW().init({
            live: false
        });
    }, []);

    return (
        <div className="justify-content-center align-items-center mt-6">
            <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                    <h3 className="display-3 font-weight-bold mb-0 pt-md-2 wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s">
                        Creative Agency{" "}
                    </h3>

                    <hr className="hr-light my-4 w-75 pink" />
                    <h4 className="subtext-header mt-2 mb-4 wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        deleniti consequuntur nihil.
                    </h4>

                    <Link to="/about"><button class="offset text-uppercase wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay="1s">about me</button></Link>
                </MDBCol>
            </MDBRow>
        </div>

    )
}