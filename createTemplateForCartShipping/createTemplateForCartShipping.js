import treatPrices from "../treatPrices/treatPrices"

export default function createTempleForCartShipping(priceProducts, item) {
    const { imageUrl, price, ean, name } = priceProducts
    const priceTreat = treatPrices(price)

    return `
        <li>
            <div class="purchase-truffles">
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
                <div class="add-remove-products">
                    <div>
                        <span class="material-icons recycle" onclick="removeItem(${item})">
                            delete_forever
                        </span>
                    </div>
                </div>
            </div>
        </li>
    `
}