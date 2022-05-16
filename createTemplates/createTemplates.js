import treatPrices from "../treatPrices/treatPrices"

export default function createTemplate(item) {

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