import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
    
    reducers: {
      showMiniCart(state) {
        state.showMiniCart = true;
      },

      hideMiniCart(state) {
        state.hideMiniCart = false;
      },

      addToCart(state, action) {
        const newItem = action.payload;
        const index = state.cartItems.findIndex(x => x.id === newItem.id);
        if(index >= 0) {
          state.cartItems[index].quantity += newItem.quantity;
        } else {
          state.cartItems.push(newItem);
        }
      },

      setQuantity(state,action) {
        const {id,quantity} = action.payload;
        const index = state.cartitem.findIndex(x => x.id ===id);
        if(index >= 0) {
          state.cartitem[index].quantity = quantity;
        }
      },

      removeFromCart(state,action) {
        const idNeedToRemove = action.payload;
        state.cartitem = state.cartitem.filter((item) => item.id !== idNeedToRemove);
      },

    }
});

const {actions,reducer} = cartSlice;
export const {showMiniCart,hideMiniCart, addToCart,setQuantity,removeFromCart} = actions;
export default reducer;