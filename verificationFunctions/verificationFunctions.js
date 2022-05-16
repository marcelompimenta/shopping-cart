import { amount, productsSelecteds, ulContainer } from "../app.js"
import { insertMessageFreeShipping } from "../insertFunctions/insertFunctions.js"
import { popUpFlex, popUpNone, purchaseNone, mainFlex, amountFlex, amountNone } from "../styles/styles.js"

function verifyItemIntoCart() {
    ulContainer.childElementCount > 0
        ? popUpNone()
        : (popUpFlex(),
            purchaseNone(),
            mainFlex(),
            setTimeout(() => { popUpNone() }, 2000))
}

function verifyAmount() {
    const count = productsSelecteds.length

    count > 0
        ? (amount.innerText = count, amountFlex())
        : (amount.innerText = "", amountNone())
}

function checkFreeShipping(amount) {
    amount > 1000
        ? insertMessageFreeShipping()
        : ""
}

export { verifyItemIntoCart, verifyAmount, checkFreeShipping }