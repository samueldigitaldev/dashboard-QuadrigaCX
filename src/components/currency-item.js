import React from 'react';

import CurrencyItemDaily from '../components/currency-item-daily';
// import CurrencyItemWeekly from '../components/currency-item-weekly';


function CurrencyItem(props) {
    let currencyImageUrlEnding = props.listItem.name.replace(/ /g,"-").toLowerCase() + '_logo.png';
    let currencyImageUrl = `https://raw.githubusercontent.com/djirdehh/crypto_vue/master/static/${currencyImageUrlEnding}`;
    const onFeaturedCurrency = props.onFeaturedCurrency;

    const quadrigacxTicker = props.quadrigacxTicker.map((ticker) => {
        if(ticker.id.substring(0,3) === props.listItem.symbol.toLowerCase()){
            return <div>${ticker.value.last}</div>
        }
    })


    function dailyPercentChange() {
        return ( 
            <CurrencyItemDaily 
            listItem={props.listItem}
        />
        )
    }

    return (
        <div onClick={() => onFeaturedCurrency(props.listItem)} className="currency-item-list-item">
            <a href="#">
            <div className="currency-item-list-image">
                <img src={currencyImageUrl} alt="" width="100%" height="100%" />
            </div>
            <div className="currency-item-list-info">
                <div>
                    {props.listItem.name}
                </div>
                <div>
                    {quadrigacxTicker} {dailyPercentChange(props)}
                </div>
            </div>
            </a>
        </div>
    )
}

export default CurrencyItem;