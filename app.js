fetch('https://api.currencyfreaks.com/latest?apikey=f8131a42cf60433bb580e4f6a7bce57b').then((result) => {
    //console.log(result)
    let myData = result.json();
    //console.log(myData)
    return myData
}) .then((currancy) => {
    let amount = document.querySelector(".amount");
    let dzdPrice = document.querySelector(".dzd span");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    dzdPrice.innerHTML = Math.round(amount.innerHTML * currancy.rates['DZD'])
    egpPrice.innerHTML = Math.round(amount.innerHTML * currancy.rates['EGP'])
    sarPrice.innerHTML = Math.round(amount.innerHTML * currancy.rates['SAR'])


    console.log(currancy.rates['DZD']);
    console.log(currancy.rates['EGP']);
    console.log(currancy.rates['SAR']);
})