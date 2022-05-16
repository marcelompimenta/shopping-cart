import treatPrices from "../treatPrices/treatPrices.js"
import { checkFreeShipping } from "../verificationFunctions/verificationFunctions.js"

export default function calculatePrice(listCartProducts) {

    const prices = listCartProducts.map(price => price.price)
    const finalPrices = prices.reduce((acc, item) => acc += item, 0)

    checkFreeShipping(finalPrices)
    return treatPrices(finalPrices)

}