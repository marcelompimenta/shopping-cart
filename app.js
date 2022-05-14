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
       <div class="trufas" id="${uniqueId}">
            <div>   
                <h1>${name}</h1>
            </div>
            <div>
                <img src="${imageUrl}" alt="">
            </div>
            <div>
                <span>${priceTreat}</span>
            </div>
            <div>
                <button>ADICIONAR</button>
            </div>
       </div>
    `
}

window.onload = () => allItems.map(item =>
    main.innerHTML += createTemplate(item))

const searchUniqueId = id => allItems.filter(UID =>
    UID.uniqueId === id
        ? productsSelecteds.unshift(UID)
        : ''
)
const getElementReference = element => {

    const elementClicked = element
    const getParentNode = elementClicked.parentNode.parentNode
    const getId = getParentNode.getAttribute('id')
    const getReferenceTarget = elementClicked.tagName === 'BUTTON'

    getReferenceTarget ? searchUniqueId(getId) : ''
}

main.addEventListener('click', ({ target }) => getElementReference(target))
calculate.onclick = () => calculatePrice(productsSelecteds)

function calculatePrice(listCartProducts) {

    const prices = listCartProducts.map(price => price.price)
    const finalPrices = prices.reduce((acc, item) => acc += item, 0)

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


