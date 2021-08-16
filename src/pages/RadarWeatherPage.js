import React from 'react';

import classes from './RadarWeatherPage.module.css';

function DefaultWeatherPage() {

    async function getLocation() {
        const data = await fetch("https://tilecache.rainviewer.com/v2/radar/1629133800/256/39.0473/-95.6752/0/1_0");
        const jData = await data.json();
        console.log(jData);
    }

    return (
        <div className={classes.background_color}>
            <button onClick={getLocation} ></button>
        </div>
    )
}

export default DefaultWeatherPage;
