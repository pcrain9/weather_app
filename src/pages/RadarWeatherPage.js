import React from 'react';

import classes from './RadarWeatherPage.module.css';

function DefaultWeatherPage() {

    return (
            <div className={classes.text_content}>
                <h1>Welcome to the Weather!</h1>
                <h2>Click any of the links above to get started</h2>
                <p>This site uses data from the following APIs: </p>
                    <ul className={classes.list}>
                        <li ><a href="https://api.weather.gov">api.weather.gov</a></li>
                        <li className={classes.list}><a href="maps.googleapis.com">maps.googleapis.com</a></li>
                    <br/><br/><br/><br/><br/>
                    </ul>
                
            </div>
    )
}

export default DefaultWeatherPage;
