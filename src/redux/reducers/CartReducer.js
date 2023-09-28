import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    productCounter: 0,
    cartPriceCounter:0
}

const slice = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            let product = state.cart.find((p) => p.id === action.payload.id);
            if (product) {
                return {
                    ...state,
                    cart: state.cart.map((p) => (p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p)),
                    productCounter: state.productCounter + 1,
                    cartPriceCounter:state.cartPriceCounter+product.price
                };
            }
            else {
                state.cart = [...state.cart, { quantity: 1, ...action.payload }]
                state.productCounter++
                state.cartPriceCounter=state.cartPriceCounter+action.payload.price
            }
        },
        removeFromCartAction: (state, action) => {
            let product = state.cart.find((p) => p.id === action.payload);
            if (product.quantity===1) {
                return {
                    ...state,
                    cart: state.cart.filter((p) => p.id !== action.payload),
                    productCounter: state.productCounter - 1,
                    cartPriceCounter:state.cartPriceCounter-product.price
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.map((p) => (p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p)),
                    productCounter: state.productCounter - 1,
                    cartPriceCounter:state.cartPriceCounter-product.price
                }
            }
        }
    }
})

const { addToCartAction,removeFromCartAction } = slice.actions

const addToCart = (product) => async (dispatch) => {
    dispatch(addToCartAction(product))
}

const removeFromCart=(id)=> async(dispatch)=>{
    dispatch(removeFromCartAction(id))
}


const obj = {
    reducer: slice.reducer,
    addToCart,
    removeFromCart
}

export default obj