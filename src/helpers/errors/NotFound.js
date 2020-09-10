import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {

    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page Not Found</h2>
                <Link to="/"><button class="offset text-uppercase mt-4 wow fadeIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay="1s">home</button></Link>
            </div>
        </div>
    )
}