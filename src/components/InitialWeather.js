import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationAndForecastActions } from '../store/index';

import { GetInitialWeather } from './GetInitialWeather';
import Spinner from '../UI/Spinner';
import classes from './InitialWeather.module.css';

function InitialWeather() {
    const dispatch = useDispatch();
    const initial = useSelector(state => state.locationAndForecastSlice);
    const isLoading = useSelector(state => state.isLoadingSlice.loading);
    const errorOccurred = useSelector(state => state.isLoadingSlice.hasError);

    //get user location on load
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            if (!navigator.geolocation) {
                return;
            }
            dispatch(locationAndForecastActions.addLatLng({
                coordinates:
                {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })
            );
        });
        
    }, [dispatch]);

    GetInitialWeather();


    return (
        <>
            {!errorOccurred ?
                <>
                    {isLoading ?
                        <div className={classes.daily_weather}>
                            <Spinner />
                        </div>
                        :
                        <p className={classes.show_weather}>{initial.temperature}<sup>o</sup>F &ensp; {initial.location}</p>

                    }
                </> :
                <div>foo</div>}
        </>

    )
}

export default InitialWeather;
