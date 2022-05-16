import { priceTotalContainer, ulContainer } from "../app.js"
import createTempleForCartShipping from "../createTemplateForCartShipping/createTemplateForCartShipping.js"

function insertMessageFreeShipping() {
    setTimeout(() => {
        priceTotalContainer.innerHTML += `<div id="free-shipping">
        <span>Parabéns, sua compra tem frete grátis!</span>
        </div>`
    }, 10)
}

const insertIntoDomPriceTotal = totalPrice => {
    priceTotalContainer.innerHTML = ""
    priceTotalContainer.innerHTML += insertIntoDomPrice(totalPrice)
}

const insertIntoDomLis = listProducts => {
    ulContainer.innerHTML = ""
    listProducts.forEach((item, index) =>
        ulContainer.innerHTML += createTempleForCartShipping(item, index))
}

function insertIntoDomPrice(priceTotal) {
    return `
    <div>
       <span>Total</span>
    </div>
    <div>
        <span>${priceTotal}</span>
    </div>
    `
}

export { insertIntoDomLis, insertIntoDomPriceTotal, insertMessageFreeShipping, insertIntoDomPrice }