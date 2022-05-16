const priceStringfyFortreat = prices => prices.toString().split('').join()

const priceFinalTreatedBelowTen = prices =>
    priceStringfyFortreat(prices)
        .replace(',', '.').replace(',', '')

const priceFinalTreatedOverTen = prices =>
    priceStringfyFortreat(prices)
        .replace(',', '').replace(',', '.').replace(',', '')

const priceFinalTreatedOverOneHundred = prices =>
    priceStringfyFortreat(prices)
        .replace(',', '').replace(',', '').replace(',', '.').replace(',', '')

const priceTreat = price =>
    Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(price)

const treatPrices = prices => {

    const priceToTreated = prices.toString().length
    const priceLengthThree = priceToTreated <= 3
    const priceLengthFourOrFive = priceToTreated > 3 && priceToTreated < 5
    let price;

    if (priceLengthThree) {
        price = priceFinalTreatedBelowTen(prices)
    }
    else if (priceLengthFourOrFive) {
        price = priceFinalTreatedOverTen(prices)
    }
    else {
        price = priceFinalTreatedOverOneHundred(prices)
    }

    return priceTreat(price)
}

export default treatPrices