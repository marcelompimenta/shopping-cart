import { productsBelowTen } from "./belowten.js"
import { productsOverTen } from "./overten.js"

const calculate = document.querySelector('#calculate')
const main = document.querySelector('main')

const productsBelow = productsBelowTen['items']
const productsOver = productsOverTen['items']
const productsSelecteds = []


const allItems = [...productsBelow, ...productsOver]

function createTemplate(item) {
    const { name, imageUrl, price, uniqueId } = item
    const priceTreat = treatPrices(price)
    return `
       <div class="truffles" id="${uniqueId}">
            <div class="imagetruffles">
                <img src="${imageUrl}" alt="">
            </div>
            <div class="information">
                <div>
                    <h1 class="name-products">${name}</h1>
                </div>
                <div>
                    <span class="price">${priceTreat}</span>
                </div>
                <div class="buttons-add-to-cart">
                    <button class="buttons-action add-to-cart finalize-purchase">Adicionar ao carrinho</button>
                </div>
            </div>
       </div>
    `
}

window.onload = () => allItems.map(item =>
    main.innerHTML += createTemplate(item))

const searchUniqueId = id => allItems.filter(uniqueId =>
    uniqueId.uniqueId === id
        ? productsSelecteds.push(uniqueId) : '')


const getElementReference = element => {
    const getParentNode = element.parentNode.parentNode.parentNode
    const getReferenceTarget = element.tagName === 'BUTTON'
    const getId = getParentNode.getAttribute('id')
    getReferenceTarget ? searchUniqueId(getId) : ''
}

main.addEventListener('click', ({ target }) => getElementReference(target))

calculate.onclick = () => calculatePrice(productsSelecteds)

function calculatePrice(listCartProducts) {

    const prices = listCartProducts.map(price => price.price)
    const finalPrices = prices.reduce((acc, item) => acc += item, 0)
    console.log(finalPrices)
    checkFreeShipping(finalPrices)
    console.log(treatPrices(finalPrices))

}

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

function checkFreeShipping(amount) {
    amount > 1000
        ? console.log('Possui frete grátis')
        : console.log('Que pena não possui frete')
}


