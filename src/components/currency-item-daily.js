import React from 'react';

import { arrowUp2, arrowDown2 } from 'react-icons-kit/icomoon';
import Icon from 'react-icons-kit';

function CurrencyItemDaily(props) {
    if(props.listItem.percent_change_24h > 0){
        return(
            <div style={{color: 'green'}}>
                {props.listItem.percent_change_24h}% 
                <Icon size={14} icon={arrowUp2}/>
            </div>
        )
    }else{
        return(
            <div style={{color: 'red'}}>
                {props.listItem.percent_change_24h}% 
                <Icon size={14} icon={arrowDown2}/>
            </div>
        )
    }
}


export default CurrencyItemDaily;