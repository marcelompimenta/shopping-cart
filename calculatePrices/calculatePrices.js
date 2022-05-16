export default function calculatePrice(listCartProducts) {

    const prices = listCartProducts.map(price => price.price)
    const finalPrices = prices.reduce((acc, item) => acc += item, 0)

    console.log(finalPrices)

    checkFreeShipping(finalPrices)
    return treatPrices(finalPrices)

}