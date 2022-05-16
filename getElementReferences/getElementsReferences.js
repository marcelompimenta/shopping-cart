import { allItems, productsSelecteds } from "../app.js"
import { verifyAmount } from "../verificationFunctions/verificationFunctions.js"

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

export default getElementReference
