import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import WOW from 'wowjs';

export const ServiceCard = (props) => {

    useEffect(() => {
        new WOW.WOW().init({
            live: false
        });
    }, []);

    return (
        <MDBCol md='2' className="p-2" >
            <MDBCard wide cascade style={{ borderColor: props.props.color }} className="wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".90s" >
                <MDBView cascade>
                    <img
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src={props.props.url}
                        alt='Card cap'
                        height="180"
                        width="100"
                    />
                </MDBView>

                <MDBCardBody cascade className='text-center'>
                    <MDBCardTitle className='card-title'>
                        <strong>Alice Mayer</strong>
                    </MDBCardTitle>

                    <p className='font-weight-bold' style={{ color: props.props.color }}>Photographer</p>

                    <MDBCardText >
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                    </MDBCardText>

                    <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='github' style={{ color: props.props.color }}></MDBIcon>
                        </a>
                    </MDBCol>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}