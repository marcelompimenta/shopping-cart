const searchUniqueId = id => allItems.filter(uniqueId =>
    uniqueId.uniqueId === id
        ? productsSelecteds.push(uniqueId) : '')

export default getElementReference = element => {
    const getParentNode = element.parentNode.parentNode.parentNode
    const getReferenceTarget = element.tagName === 'BUTTON'
    const getId = getParentNode.getAttribute('id')
    getReferenceTarget ? searchUniqueId(getId) : ''
    verifyAmount()
}
