// Getting the API key
let apiKey = '0d153798f2d35f5edcb8d8b1';
let request = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const fromCurrencyList = document.getElementById('from-currency');
const toCurrencyList = document.getElementById('to-currency');
const result = document.getElementById('result');

//Getting all the currencies and put  them in arrays
let currencyCodes = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "NGN",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWT",
    "BYN",
    "BZD",
    "CAD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJK",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",	
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"    
]
// Looping through the array of currency codes
currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromCurrencyList.add(option);
});

currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toCurrencyList.add(option);
});

// Choosing the default currency code values for each
fromCurrencyList.value = "NGN";
toCurrencyList.value = "USD";

function currencyConvert(){
    //creating the currency refferences
    const amount = document.querySelector('#amount').value;
    const fromCurrency = fromCurrencyList.value;
    const toCurrency = toCurrencyList.value;

    // checking if input amount field is empty
    if(amount.length != 0){
        // alert('everything is intact');
        fetch(request).then((resp) => resp.json()).then((data) => {
            let fromEchangeRate = data.conversion_rates[fromCurrency];
            let toEchangeRate =  data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromEchangeRate) * toEchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        });
    }else{
        alert('input is needed');
    }
};
document.querySelector("#convert-btn").addEventListener("click", currencyConvert);
window.addEventListener("load", currencyConvert);