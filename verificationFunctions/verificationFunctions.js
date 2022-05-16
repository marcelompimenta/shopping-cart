function verifyItemIntoCart() {
    ulContainer.childElementCount > 0
        ? popUpNone()
        : (popUpFlex(),
            purchaseNone(),
            mainFlex(),
            setTimeout(() => { popUpNone() }, 2000))
}

function verifyAmount() {
    const count = productsSelecteds.length

    count > 0
        ? (amount.innerText = count, amountFlex())
        : (amount.innerText = "", amountNone())
}

function checkFreeShipping(amount) {
    amount > 1000
        ? insertMessageFreeShipping()
        : ""
}

export { verifyItemIntoCart, verifyAmount, checkFreeShipping }