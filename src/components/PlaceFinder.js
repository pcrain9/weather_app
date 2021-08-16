import Autocomplete from "react-google-autocomplete";
import { useDispatch } from 'react-redux';
import { locationAndForecastActions } from '../store/index';

import classes from './PlaceFinder.module.css';

function PlaceFinder() {
    
    const dispatch = useDispatch();

    function placeWasSelectedHandler(place) {

        const storedAddress = place.address_components[0].long_name + ", " + place.address_components[2].short_name;
        console.log(storedAddress);
        dispatch(locationAndForecastActions.addLocation({location: storedAddress}));
    }

    return(
    <Autocomplete
        apiKey="AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc"
        onPlaceSelected={placeWasSelectedHandler}
        className={classes.search_bar}/>
    );
}

export default PlaceFinder;