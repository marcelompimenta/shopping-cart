import { productsBelowTen } from "./apis/belowten.js"
import { productsOverTen } from "./apis/overten.js"
import createTemplate from "./createTemplates/createTemplates.js"

const productsBelow = productsBelowTen['items']
const productsOver = productsOverTen['items']
const allItems = [...productsBelow, ...productsOver]
const productsSelecteds = []

const main = document.querySelector('main')
const purchase = document.querySelector('#purchase')
const priceTotalContainer = document.querySelector('#price-total')
const ulContainer = document.querySelector('ul')
const amount = document.querySelector('#amountTotal')
const styleAmount = document.querySelector('#amount')
const popUp = document.querySelector('#container-pop-up')
const popUpkeepingBuy = document.querySelector('#keep-buying')
const modal = document.querySelector('#modal')

const cart = document.querySelector('.material-icons')
const finalizeButton = document.querySelector('#finalize-purchase')
const continueBuy = document.querySelector('.continue')
const finalizeBuy = document.querySelector('.finalize')

export {
    productsSelecteds,
    purchase,
    priceTotalContainer,
    ulContainer,
    amount,
    styleAmount,
    popUp,
    popUpkeepingBuy,
    modal
}

window.onload = () => allItems.map(item =>
    main.innerHTML += createTemplate(item))

window.removeItems = item => removeItems(item)
continueBuy.onclick = () => continueBuying()
finalizeBuy.onclick = () => finalizeBuying()
cart.onclick = () => openCart()
finalizeButton.onclick = () => finalizeBuyingButton()
main.addEventListener('click', ({ target }) => getElementReference(target))