import React from 'react';

import { arrowUp2, arrowDown2 } from 'react-icons-kit/icomoon';
import Icon from 'react-icons-kit';

function CurrencyItemHourly (props) {
    
    if(props.listItem.firstAndLastTransactions[0] === undefined || props.listItem.firstAndLastTransactions[1] === undefined){
        return ( 
            <div></div>
        )
    }else{
        let startPrice = props.listItem.firstAndLastTransactions[0].price;
        let endPrice = props.listItem.firstAndLastTransactions[1].price
        let hourlyPercentChange = (((endPrice-startPrice)/startPrice)*100).toFixed(2);
        if(hourlyPercentChange > 0){
            return(
            <div>
                <div>Hourly Change:</div> 
                <div style={{color: 'green'}}>
                    {hourlyPercentChange}% 
                    <Icon size={14} icon={arrowUp2}/>
                </div>
            </div>
            )
        }else{
            return(
            <div>
                <div>Hourly Change:</div> 
                <div style={{color: 'red'}}>
                    {hourlyPercentChange}% 
                    <Icon size={14} icon={arrowDown2}/>
                </div>
            </div>
            )
        }
    }



}

export default CurrencyItemHourly;