import { productsBelowTen } from "./belowten.js"
import { productsOverTen } from "./overten.js"

const main = document.querySelector('main')
const cart = document.querySelector('.material-icons')
const purchase = document.querySelector('#purchase')
const finalizeButton = document.querySelector('#finalize-purchase')
const priceTotalContainer = document.querySelector('#price-total')
const ulContainer = document.querySelector('ul')
const amount = document.querySelector('#amountTotal')
const styleAmount = document.querySelector('#amount')
const popUp = document.querySelector('#container-pop-up')
const productsBelow = productsBelowTen['items']
const productsOver = productsOverTen['items']
const allItems = [...productsBelow, ...productsOver]
const productsSelecteds = []

window.onload = () => allItems.map(item =>
    main.innerHTML += createTemplate(item))

/*FUNÇÃO RESPONSAVEL POR CRIAR O TEMPLATE DOS PRODUTOS */

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

/*FUNÇÃO RESPONSAVEL POR CRIAR O TEMPLATE DOS PRODUTOS DENTRO DO CARRINHO */
function createTempleForCartShipping(priceProducts) {
    const { imageUrl, price, ean, name } = priceProducts
    const priceTreat = treatPrices(price)

    return `
        <li>
            <div class=" purchase-truffles">
                <div class=" purchase-image">
                    <img class="purchase-image-link"
                        src="${imageUrl}"
                        alt="">
                </div>
                <div class="purchase-info">
                    <div>
                        <h1 class="purchase-prod-names">${name}</h1>
                    </div>
                    <div class="purchase-cod">
                        <span>Cód. ${ean}</span>
                    </div>
                    <div>
                        <span class="purchase-price">${priceTreat}</span>
                    </div>
                </div>
            </div>
        </li>
    `
}
/* FUNCÇÃO RESPONSAVEL POR GERAR O TEMPLATE DO PREÇO TOTAL NO DOM */

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

        priceTotalContainer.insertAdjacentHTML('beforeEnd', `<div id="free-shipping">
        <span>Parabéns, sua compra tem frete grátis!</span>
        </div>`
        )

    }, 200)
}



/* FUNÇÃO RESPONSAVEL POR INSERIR O PREÇO TOTAL NO CARRINHO */
const insertIntoDomPriceTotal = totalPrice => {
    priceTotalContainer.innerHTML = ""
    priceTotalContainer.innerHTML += insertIntoDomPrice(totalPrice)
}

/* FUNÇÃO RESPONSAVEL POR INSERIR A MENSAGEM DE FRETE GRÁTIS, CASO O CLIENTE TENHA ATINGIDO O VALOR MINIMO */

const insertIntoDomLis = listProducts => {
    ulContainer.innerHTML = ""
    listProducts.forEach(item =>
        ulContainer.innerHTML += createTempleForCartShipping(item))
}

const searchUniqueId = id => allItems.filter(uniqueId =>
    uniqueId.uniqueId === id
        ? productsSelecteds.push(uniqueId) : '')


const getElementReference = element => {
    const getParentNode = element.parentNode.parentNode.parentNode
    const getReferenceTarget = element.tagName === 'BUTTON'
    const getId = getParentNode.getAttribute('id')
    getReferenceTarget ? searchUniqueId(getId) : ''
    verifyAmount()
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


/* FUNÇÃO QUE VERIFICA SE O CLINTE ATINGIU O MINIMO PARA RECEBER FRETE GRÁTIS */

function checkFreeShipping(amount) {
    amount > 1000
        ? insertMessageFreeShipping()
        : console.log('Que pena não possui frete')
}

/* OBJETO QUE CONTEM AS FUNÇÕES QUE MANIPULAM OS STYLE NECESSARIOS PARA APLICAÇÃO */

const styles = {
    styleAmountFlex: () => {
        styleAmount.style.display = "flex"
    },
    styleAmountNone: () => {
        styleAmount.style.display = "none"
    },
    stylePurchaseFlex: () => {
        purchase.style.display = "flex"
    },
    stylePurchaseNone: () => {
        purchase.style.display = "none"
    },
    styleMainFlex: () => {
        main.style.display = "flex"
    },
    styleMainNone: () => {
        main.style.display = "none"
    },
    stylePopUpFlex: () => {
        popUp.style.display = "flex"
    },
    stylePopUpNone: () => {
        popUp.style.display = "none"
    }

}

/* INSTANCIAMENTO DAS FUNÇÕES QUE MANIPULAM OS ESTILOS */

const purchaseFlex = styles['stylePurchaseFlex']
const purchaseNone = styles['stylePurchaseNone']
const popUpFlex = styles['stylePopUpFlex']
const popUpNone = styles['stylePopUpNone']
const mainFlex = styles['styleMainFlex']
const mainNone = styles['styleMainNone']
const amountFlex = styles['styleAmountFlex']
const amountNone = styles['styleAmountNone']

/* FUNÇÃO QUE VERIFICA SE O CARRINHO POSSUI ALGUM ITEM E MOSTRA O MODAL */

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

/* FUNÇÕES DE EVENTO E CLICK DA APLICAÇÃO */

cart.onclick = () => {
    purchaseFlex()
    mainNone()
    insertIntoDomLis(productsSelecteds)
    insertIntoDomPriceTotal(calculatePrice(productsSelecteds))
    verifyItemIntoCart()
}

finalizeButton.onclick = () => {
    purchaseNone()
    mainFlex()
    clearListProducts()
}

main.addEventListener('click', ({ target }) => getElementReference(target))