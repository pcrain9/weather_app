import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './DailyWeatherDisplay.module.css';

function DailyWeatherDisplay(props) {

    const [userClicked, setUserClicked] = useState(false);

    function handleShowFull() {
        setUserClicked(true);
    }

    function handleShowLess() {
        setUserClicked(false);
    }

    return (
        <>
            {!userClicked ? <Card onShowMore={handleShowFull} className={classes.daily_weather_card_small}>
                <h3 className={classes.words_small}>{props.day}:  {props.temperature}<sup>o</sup>F</h3>
                <h3 className={classes.button_small} >^</h3>
            </Card> :
                <Card onShowLess={handleShowLess} className={classes.daily_weather_card_big}>
                    <span className={classes.big_weather_day_display}>
                        <h1 className={classes.big_weather_day_display_day}>{props.day}</h1> <h3>^</h3>
                    </span>
                    <h5>{props.temperature}<sup>o</sup>F</h5>
                    <p>{props.forecast}</p>

                </Card>
            }
        </>
    )
}

export default DailyWeatherDisplay;
