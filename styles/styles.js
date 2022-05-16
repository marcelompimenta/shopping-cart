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
    },
    stylePopUpkeepingBuyFlex: () => {
        popUpkeepingBuy.style.display = "flex"
    },
    stylePopUpkeepingBuyNone: () => {
        popUpkeepingBuy.style.display = "none"
    },
    styleModalFlex: () => {
        modal.style.display = "flex"
    },
    styleModalNone: () => {
        modal.style.display = "none"
    }

}

/* INSTANCIAMENTO DAS FUNÇÕES QUE MANIPULAM OS ESTILOS */

const popUpBuyFlex = styles['stylePopUpkeepingBuyFlex']
const popUpBuyNone = styles['stylePopUpkeepingBuyNone']
const purchaseFlex = styles['stylePurchaseFlex']
const purchaseNone = styles['stylePurchaseNone']
const amountFlex = styles['styleAmountFlex']
const amountNone = styles['styleAmountNone']
const popUpFlex = styles['stylePopUpFlex']
const popUpNone = styles['stylePopUpNone']
const modalFlex = styles['styleModalFlex']
const modalNone = styles['styleModalNone']
const mainFlex = styles['styleMainFlex']
const mainNone = styles['styleMainNone']

export {
    popUpBuyFlex,
    popUpBuyNone,
    purchaseFlex,
    purchaseNone,
    amountFlex,
    amountNone,
    popUpFlex,
    popUpNone,
    modalFlex,
    modalNone,
    mainFlex,
    mainNone
}