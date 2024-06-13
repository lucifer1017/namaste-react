import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop() //written for sake of simplicity, otherwise would have found out the 
            //the index of the item using action.payload and stuff and then remove that
            //particular item
        },
        clearCart: (state) => { //can avoid writing action here, not necessary
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //this line and line no.26 are syntax redux uses, remember them.

export default cartSlice.reducer;

