import React, { useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import WOW from 'wowjs';

export const ServiceCard = (props) => {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <MDBCol md='2' className="p-2" >
            <MDBCard wide cascade style={{ borderColor: props.props.color }} className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".75s" >
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

                    <p className='font-weight-bold blue-text'>Photographer</p>

                    <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
                    </MDBCardText>

                    <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                        </a>
                    </MDBCol>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}