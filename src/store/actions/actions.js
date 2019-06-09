
/* data c'est props */
/* action va à tous les reducers*/

const addToCardAction = (data) => {
    return{
        type: "ADD_TO_CARD",
        product: data
    }
}

export {addToCardAction}