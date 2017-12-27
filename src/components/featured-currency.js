import React from 'react';
let _ = require('lodash');

function FeaturedCurrency (props) {
    
    if(_.isEmpty(props.featuredCurrency)){
        return <div> </div>
    }
    //console.log(props);
    let currencyImageUrlEnding = props.featuredCurrency.symbol.toLowerCase() + '.png';
    let currencyImageUrl = `https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/${currencyImageUrlEnding}`;

    const quadrigacxTicker = props.quadrigacxTicker.map((ticker) => {
        if(ticker.id.substring(0,3) === props.featuredCurrency.symbol.toLowerCase()){

            function timeStamp() {
                var date = new Date(ticker.value.timestamp*1000);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();
                var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            return (<div>Last Updated: {formattedTime} </div>);
            }


            return (
                <div key={ticker.id}>
                    <div>Ask: {ticker.value.ask}</div>
                    <div>Bid: {ticker.value.bid}</div>
                    <div>High: {ticker.value.high}</div>
                    <div>Low: {ticker.value.low}</div>
                    <div>Last: {ticker.value.last}</div>
                    <div>Volume: {ticker.value.volume}</div>
                    {timeStamp()}
                </div>
            )
        }
    })



    return (
        <div>
            <img src={currencyImageUrl} alt="" width="10%"/>
            <div>{props.featuredCurrency.name}</div>
            {quadrigacxTicker}


        </div>
    )
}

export default FeaturedCurrency;