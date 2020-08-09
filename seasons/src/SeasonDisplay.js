import './SeasonDisplay.css';
import React from 'react';


const SeasonConfig = {
    summer:{
        text: 'Погнали на пляж!',
        iconName:'sun'
    },
    winter:{
        text: 'Бррр, тут холодно!',
        iconName :'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon icon-right massive`}/>
        </div>
    )
};

export default SeasonDisplay;