import { productsBelowTen } from "./apis/belowten.js"
import { productsOverTen } from "./apis/overten.js"
import createTempleForCartShipping from "./createTemplateFoCartShipping/create-template-for-cart-shipping.js"
import createTemplate from "./createTemplates/create-templates.js"
import treatPrices from "./treatPrices/treat-prices.js"

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


window.onload = () => allItems.map(item =>
    main.innerHTML += createTemplate(item))

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
/* FUNÇÃO RESPONSAVEL POR GERAR O TEMPLATE DA MENSAGEM NO DOM */
function insertMessageFreeShipping() {
    setTimeout(() => {
        priceTotalContainer.innerHTML += `<div id="free-shipping">
        <span>Parabéns, sua compra tem frete grátis!</span>
        </div>`
    }, 10)

}

/* FUNÇÃO RESPONSAVEL POR INSERIR O PREÇO TOTAL NO CARRINHO */

const insertIntoDomPriceTotal = totalPrice => {
    priceTotalContainer.innerHTML = ""
    priceTotalContainer.innerHTML += insertIntoDomPrice(totalPrice)
}

/* FUNÇÃO RESPONSAVEL POR INSERIR A MENSAGEM DE FRETE GRÁTIS, CASO O CLIENTE TENHA ATINGIDO O VALOR MINIMO */

const insertIntoDomLis = listProducts => {
    ulContainer.innerHTML = ""
    listProducts.forEach((item, index) =>
        ulContainer.innerHTML += createTempleForCartShipping(item, index))
}

/*FUNÇÃO QUE CALCULA OS PREÇOS*/
function calculatePrice(listCartProducts) {

    const prices = listCartProducts.map(price => price.price)
    const finalPrices = prices.reduce((acc, item) => acc += item, 0)

    console.log(finalPrices)

    checkFreeShipping(finalPrices)
    return treatPrices(finalPrices)

}

/* BLOCO DE FUNÇÕES QUE FAZEM O TRATAMENTO DOS VALORES */



function checkFreeShipping(amount) {
    amount > 1000
        ? insertMessageFreeShipping()
        : ""
}

function verifyItemIntoCart() {
    ulContainer.childElementCount > 0
        ? popUpNone()
        : (popUpFlex(),
            purchaseNone(),
            mainFlex(),
            setTimeout(() => { popUpNone() }, 2000))
}
/* FUNÇÃO QUE REMOVE TODAS OS ITENS APOS FINALIZADA A COMPRA */

function clearListProducts() {
    ulContainer.innerHTML = ""
    productsSelecteds.length = 0
    verifyAmount()
}

/* FUNÇÃO QUE VERIFICA E ADICIONA A CONTAGEM DE ITENS NO POPUP DO CARRINHO */

function verifyAmount() {
    const count = productsSelecteds.length

    count > 0
        ? (amount.innerText = count, amountFlex())
        : (amount.innerText = "", amountNone())
}

/* FUNÇÃO QUE REMOVE UM ITEM DO CARRINHO DE COMPRAS */

function removeItems(item) {
    productsSelecteds.splice(item, 1)
    insertIntoDomLis(productsSelecteds)
    insertIntoDomPriceTotal(calculatePrice(productsSelecteds))
    verifyItemIntoCart()
    verifyAmount()
    console.log(productsSelecteds)
}

window.removeItem = item => removeItems(item)

/* FUNÇÕES DE EVENTO E CLICK DA APLICAÇÃO */

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

continueBuy.onclick = () => continueBuying()
finalizeBuy.onclick = () => finalizeBuying()
cart.onclick = () => openCart()
finalizeButton.onclick = () => finalizeBuyingButton()
main.addEventListener('click', ({ target }) => getElementReference(target))