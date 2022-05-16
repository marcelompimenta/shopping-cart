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