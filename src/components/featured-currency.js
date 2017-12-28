import React from 'react';
let _ = require('lodash');

function FeaturedCurrency (props) {
    
    if(_.isEmpty(props.featuredCurrency)){
        return <div> </div>
    }
    let currencyImageUrlEnding = props.featuredCurrency.name.replace(/ /g,"-").toLowerCase() + '_large_logo.png';
    let currencyImageUrl = `https://raw.githubusercontent.com/djirdehh/crypto_vue/master/static/${currencyImageUrlEnding}`;

    const quadrigacxTicker = props.quadrigacxTicker.map((ticker) => {
        if(ticker.id.substring(0,3) === props.featuredCurrency.symbol.toLowerCase()){
            function timeStamp() {
                var date = new Date(ticker.value.timestamp*1000);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();
                var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                return (<div className="featured-currency-info-timestamp">Last Updated: {formattedTime} </div>);
            }
        
        function twoDecimal(volume) {
            volume = parseFloat(volume).toFixed(2);
            return volume;
        }

            return (
                <div className="featured-currency-info-financial" key={ticker.id}>
                    <div className="featured-currency-info-pairs">Ask: ${ticker.value.ask}</div>
                    <div className="featured-currency-info-pairs">Bid: ${ticker.value.bid}</div>
                    <div className="featured-currency-info-pairs">High: ${ticker.value.high}</div>
                    <div className="featured-currency-info-pairs">Low: ${ticker.value.low}</div>
                    <div className="featured-currency-info-pairs">Last: ${ticker.value.last}</div>
                    <div className="featured-currency-info-pairs">Volume: ${twoDecimal(ticker.value.volume)}</div>
                    {timeStamp()}
                </div>
            )
        }
    })

    return (
        <div className="featured-currency-container">
            <div className="featured-currency-image">
                <img src={currencyImageUrl} alt="" width="33.33%"/>
            </div>
            <div className="featured-currency-info">
                <div className="featured-currency-info-name">{props.featuredCurrency.name}</div>
                {quadrigacxTicker}
            </div>
        </div>
    )
}

export default FeaturedCurrency;