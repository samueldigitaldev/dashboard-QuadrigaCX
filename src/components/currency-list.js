import React from 'react';

import CurrencyItem from '../components/currency-item';

function CurrencyList (props) {
    if(!props){
        return <div> </div>
    }
    const currencyListItem = props.marketCapTickerArray.map((listItem) => {
        return ( 
            <CurrencyItem 
                onFeaturedCurrency={props.onFeaturedCurrency}
                listItem={listItem} 
                key={listItem.id} 
                firstAndLastTransactions={props.firstAndLastTransactions}
                quadrigacxTicker={props.quadrigacxTicker}
        />
        )
    });
    

    return( 
        <div className="currency-item-list">
            {currencyListItem}
        </div>
    )
}

export default CurrencyList;