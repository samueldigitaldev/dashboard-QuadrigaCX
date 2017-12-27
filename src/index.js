import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import CurrencyList from '../src/components/currency-list';
import FeaturedCurrency from '../src/components/featured-currency';
import Normalize from '../src/style/normalize.css';
import Style from '../src/style/style.css';
//import featuredCurrency from '../src/components/featured-currency';

let _ = require('lodash');
const quadrigacxTickerApi = `https://api.quadrigacx.com/v2/ticker?book=all`;
const marketCapTickerApi = `https://api.coinmarketcap.com/v1/ticker/?limit=15`;
const quadrigacxTransactions = `https://api.quadrigacx.com/v2/transactions?book=`;

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            quadrigacxArray: [],
            marketCapTickerArray: [],
            featuredCurrency: {},
            firstAndLastTransactions: []
        };
    }

    componentDidMount() {
        axios.get(quadrigacxTickerApi)
        .then((response) => {
            const tickerDataObj = response.data;
            let tickerDataArray = _.map(tickerDataObj, function(value,id){
                if(id.includes("cad")){
                    return {id, value}
                }
            });
            tickerDataArray = tickerDataArray.filter(ticker => ticker !== undefined);
            this.setState({quadrigacxArray:tickerDataArray});
        })
        .then(() => {
            axios.get(marketCapTickerApi)
            .then((response) => {
                const marketCapTickerApiData = response.data;
                let currencyList = this.state.quadrigacxArray;
                let marketCapTickerArray = [];

                marketCapTickerApiData.forEach((ticker, index) =>{
                    currencyList.forEach((currency) => {
                        if(ticker.symbol.toUpperCase() === currency.id.substring(0,3).toUpperCase()){
                            marketCapTickerArray.push(marketCapTickerApiData[index]);
                            this.setState({marketCapTickerArray})
                        }
                        this.setState({featuredCurrency:this.state.marketCapTickerArray[0]})
                    });
                });
            })
        })
        .then(() => {
            console.log(this.state.marketCapTickerArray.length);
            if(this.state.marketCapTickerArray.length === 0){
                console.log(this.state);
            }else{
                console.log(this.state);
                let tickerSymbol = this.state.marketCapTickerArray.symbol.substring(0,3);
                axios.get(`${quadrigacxTransactions}${tickerSymbol}_cad`)
                .then((response) => {
                    console.log(response);
                    console.log(this.state.marketCapTickerArray);
                })
            
            }
        })
    }
    
    render() {
        return (
            <div>
                <FeaturedCurrency 
                    featuredCurrency={this.state.featuredCurrency}
                    quadrigacxTicker={this.state.quadrigacxArray}
                />
                <CurrencyList 
                    marketCapTickerArray={this.state.marketCapTickerArray}
                    onFeaturedCurrency={featuredCurrency => this.setState({featuredCurrency})}
                    firstAndLastTransactions={this.state.firstAndLastTransactions}
                    quadrigacxTicker={this.state.quadrigacxArray}
                />
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));


                // firstAndLastTransactions.push(hourlyTransactions[0]);
                // firstAndLastTransactions.push(hourlyTransactions[hourlyTransactions.length-1]);
                // this.setState({firstAndLastTransactions})