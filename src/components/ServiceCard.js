import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';

export const ServiceCard = (props) => {

    return (

        <MDBCol md='2' className="p-2 mx-2 mb-2" >
            <MDBCard wide cascade style={{ borderColor: props.props.color }} >
                <MDBView cascade>
                    <img
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