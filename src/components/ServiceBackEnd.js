import React, { useState } from 'react';
import { MDBRow } from 'mdbreact';
import { ServiceCard } from './ServiceCard';

export const ServiceBackEnd = () => {

    const [data, setData] = useState([{ "url": "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png", "color": "#33b5e5" }, { "url": "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png", "color": "#33b5e5" }, { "url": "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png", "color": "#33b5e5" }]);

    return (
        <MDBRow className="justify-content-center align-items-center p-3">

            {
                data.map((d) =>
                    <ServiceCard props={d} />
                )
            }

        </MDBRow>
    )

}