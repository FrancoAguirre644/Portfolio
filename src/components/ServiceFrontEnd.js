import React, { useState } from 'react';
import { MDBRow } from 'mdbreact';
import { ServiceCard } from './ServiceCard';

export const ServiceFrontEnd = () => {

    const [data, setData] = useState([{ "url": "https://w7.pngwing.com/pngs/713/936/png-transparent-spring-framework-representational-state-transfer-java-api-for-restful-web-services-microservices-others-text-trademark-logo.png", "color": "#00C851" }, { "url": "https://w7.pngwing.com/pngs/713/936/png-transparent-spring-framework-representational-state-transfer-java-api-for-restful-web-services-microservices-others-text-trademark-logo.png", "color": "#00C851" }, { "url": "https://w7.pngwing.com/pngs/713/936/png-transparent-spring-framework-representational-state-transfer-java-api-for-restful-web-services-microservices-others-text-trademark-logo.png", "color": "#00C851" }]);

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