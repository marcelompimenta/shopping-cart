import { productsSelecteds, ulContainer } from "../app.js"
import { verifyItemIntoCart, verifyAmount } from "../verificationFunctions/verificationFunctions.js"
import { insertIntoDomLis, insertIntoDomPriceTotal } from "../insertFunctions/insertFunctions.js"
import calculatePrice from "../calculatePrices/calculatePrices.js"

import {
    popUpBuyFlex,
    popUpBuyNone,
    purchaseFlex,
    purchaseNone,
    modalFlex,
    modalNone,
    mainFlex,
    mainNone
} from "../styles/styles.js"


function openCart() {
    purchaseFlex()
    mainNone()
    insertIntoDomLis(productsSelecteds)
    insertIntoDomPriceTotal(calculatePrice(productsSelecteds))
    verifyItemIntoCart()
}

function continueBuying() {
    mainFlex()
    modalNone()
    popUpBuyNone()
    purchaseNone()
}

function finalizeBuying() {
    mainFlex()
    modalNone()
    popUpBuyNone()
    purchaseNone()
    clearListProducts()
    verifyItemIntoCart()
    verifyAmount()
}

function finalizeBuyingButton() {
    modalFlex()
    popUpBuyFlex()
}

function removeItems(item) {
    productsSelecteds.splice(item, 1)
    insertIntoDomLis(productsSelecteds)
    insertIntoDomPriceTotal(calculatePrice(productsSelecteds))
    verifyItemIntoCart()
    verifyAmount()
    console.log(productsSelecteds)
}

function clearListProducts() {
    ulContainer.innerHTML = ""
    productsSelecteds.length = 0
    verifyAmount()
}

export {
    openCart,
    continueBuying,
    finalizeBuying,
    finalizeBuyingButton,
    removeItems,
    clearListProducts
}