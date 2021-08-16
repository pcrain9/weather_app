import React from 'react';

import classes from './Card.module.css';

function Card(props) {

    function handleClick() {
        if(props.onShowMore){
            props.onShowMore();
        }
        if(props.onShowLess){
            props.onShowLess();
        }
    }

    return (
        <div onClick={handleClick} 
        className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
}

export default Card
