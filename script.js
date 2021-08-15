const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap-btn');
const exchangeRate = document.getElementById('exchange-rate');


async function calculate(e) {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    const res = await fetch(`https://v6.exchangerate-api.com/v6/7b83d066cb0a7b088afb662c/latest/${currOne}`);
    const data = await res.json();
    console.log(data);
    const rate = data.conversion_rates[currTwo];
    exchangeRate.innerText = `1 ${currOne} = ${rate} ${currTwo}`;

    const amtTwo = (amountOne.value * rate).toFixed(2);
    amountTwo.value = amtTwo;
}

//swap currencies
swapBtn.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);