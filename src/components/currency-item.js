import React from 'react';

import CurrencyItemHourly from '../components/currency-item-hourly';
import CurrencyItemDaily from '../components/currency-item-daily';
import CurrencyItemWeekly from '../components/currency-item-weekly';


function CurrencyItem(props) {
    let currencyImageUrlEnding = props.listItem.symbol.toLowerCase() + '.png';
    let currencyImageUrl = `https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/${currencyImageUrlEnding}`;
    const onFeaturedCurrency = props.onFeaturedCurrency;


    const quadrigacxTicker = props.quadrigacxTicker.map((ticker) => {
        if(ticker.id.substring(0,3) === props.listItem.symbol.toLowerCase()){
            return <div>{ticker.value.last}</div>
        }
    })

    function hourlyPercentChange() {

        return(
            <CurrencyItemHourly
            listItem={props}
            />
        )
    }

    function dailyPercentChange() {
        return ( 
            <CurrencyItemDaily 
            listItem={props.listItem}
        />
        )
    }

    function weeklyPercentChange() {
        return ( 
            <CurrencyItemWeekly
            listItem={props.listItem}
        />
        )
    }

    return (
        <div onClick={() => onFeaturedCurrency(props.listItem)} className="currency-item-list-item">
            <a href="#">
            <div>
                <img src={currencyImageUrl} alt="" width="25%"/>
            </div>
            <div>
                {props.listItem.name}
            </div>
            <div>
                Last Price: ${quadrigacxTicker}
            </div>
            {hourlyPercentChange(props)}
            {dailyPercentChange(props)}
            {weeklyPercentChange(props)}
            </a>
        </div>
    )
}

export default CurrencyItem;