// Token Balances in the form of an object array
// The returned value can be used for the "Pie Chart"

import moment from "moment";

export const token_balances = (balances) => {
    let token_bal = [];
    for(const add of balances) {
        for(const tok of add.bal){
            if(tok.quote !== 0){
                const found = token_bal.some(el => el.name === tok.contract_ticker_symbol);
                if(!found){
                    token_bal.push({name : tok.contract_ticker_symbol, value : parseInt(tok.quote)});
                }
                else{
                    let x = token_bal.find(el => el.name === tok.contract_ticker_symbol);
                    x.value += parseInt(tok.quote);
                }
            }
        }   
    }
    return token_bal;
}

// Current Value of the Portfolio
export const portfolio_value = (balances) => {
    let val = 0;
    for(const add of balances) {
        for(const tok of add.bal){
        val += tok.quote;
        }    
    }
    return val.toFixed(2);
}

// The 24 Hr Avg Value of Portfolio
export const portfolio_value24 = (balances) => {
    let val = 0;
    for(const add of balances) {
        for(const tok of add.bal){
            val += tok.quote_24h;
        }    
    }   
    return val.toFixed(2);
}

// Historical Data for the Line Chart !!
export const historical_bal = (balances, days) => {
    let hist_bal = [];
    let i = 0;
    let d = moment();
    while(i<days){
        let d_bal = 0;
        for(const add of balances){
            for(const tok of add.bal){
                d_bal += tok.holdings[i].close.quote;
            }
        }   
        hist_bal.push({name : d.date(), value : parseFloat(d_bal.toFixed(2))});
        d.subtract(1 , 'd');
        i++;
    }
    return hist_bal;
}

export const non_zero_tokens = (balances) => {
    let tokens = [];
    for(const add of balances) {
        for(const tok of add.bal){
            if(tok.balance !== 0){
                const found = tokens.some(el => el.address === tok.contract_address);
                if(!found){
                    tokens.push({address : tok.contract_address});
                }
            }
        }   
    }
    return tokens;    
}

export const tx_data_sorted = (txList, days) => {
    let t = [];
    let today = moment();
    let i = 0;
    while(i<days){
        let count = 0;
        for(const tL of txList){
            if(moment(tL.timestamp).isSame(today, 'day')){
                count += 1;
            }
        }
        t.push({name : today.date(), Txs : count});
        today.subtract(1, 'd');
        i += 1;
    }
    return t;
}