const currencyFirstE1 = document.getElementById('fromCurrency');
const currencySecondE1 = document.getElementById('toCurrency');

const amountE1 = document.getElementById('amount');
const resultE1 = document.getElementById('result');

const exchangeRateE1 = document.getElementById('exchange-rate');



updateExchangeRate()


function updateExchangeRate() {
    fetch(`https://v6.exchangerate-api.com/v6/c5f310edae42f652ce379626/latest/${currencyFirstE1.value}`)
        .then(res => res.json())
        .then(data => {
            const exchangeRate = data.conversion_rates[currencySecondE1.value];
            exchangeRateE1.textContent = `1 ${currencyFirstE1.value} = ${exchangeRate} ${currencySecondE1.value}`;
            resultE1.value = (amountE1.value * exchangeRate).toFixed(2);
        })
        .catch(() => {
            exchangeRateE1.textContent = 'Error fetching exchange rate';
            resultE1.value = '';
        });
}




currencyFirstE1.addEventListener('change', updateExchangeRate);
currencySecondE1.addEventListener('change', updateExchangeRate);

amountE1.addEventListener('input', updateExchangeRate);
resultE1.addEventListener('input', updateExchangeRate);