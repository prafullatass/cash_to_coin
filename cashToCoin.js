const dollarAmount = 34.43
const piggyBank = {
    pennies : 0,
    nickels : 0,
    dimes : 0,
    quaters : 0
}

// Your magic code here
const convert = () => {
    let centsAmount = Math.round(dollarAmount * 100)

    piggyBank.quaters = Math.floor(centsAmount/ 25)
    centsAmount -= piggyBank.quaters * 25

    piggyBank.dimes = Math.floor(centsAmount / 10)
    centsAmount -= piggyBank.dimes * 10

    piggyBank.nickels = Math.floor(centsAmount / 5)
    centsAmount -= piggyBank.nickels * 5

    piggyBank.pennies = centsAmount
}

convert()
console.log(piggyBank)