const initState = {
    products : [
        {
            Nom:"Jolie Veuilleuse",
            Src:"https://otriki.files.wordpress.com/2010/01/21_veilleuse_romantique_lamitee.jpg",
            Prix:"50 DT",
            Reduction:"20%",
            Rating: 4
        
          }
    ]
}

const CartReducer = (state = initState, action) => {
    if (action.type == "ADD_TO_CARD")
    {
        let tab = state.products
        tab.push (action.product)
        return {
            ...state ,
            products : tab
        }
        
    }
    else 
    {
        return state
    }
}

export default CartReducer