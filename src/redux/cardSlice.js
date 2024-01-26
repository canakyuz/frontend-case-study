import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
 let card = localStorage.getItem("card");
 if (card) {
  return JSON.parse(card);
 } else {
  return [];
 }
};

const storeInLocalStorage = (data) => {
 localStorage.setItem("card", JSON.stringify(data));
};

const initialState = {
 cardItems: fetchFromLocalStorage(),
 itemCount: 0,
 totalAmount: 0,
};

const cardSlice = createSlice({
 name: "card",
 initialState,
 reducers: {
  addToCard: (state, action) => {
   const { id, brand, model, price, name } = action.payload;
   const existingItem = state.cardItems.find((item) => item.id === id);
   if (existingItem) {
    existingItem.quantity++;
   } else {
    state.cardItems = [...state.cardItems, { id, brand, model, price, quantity: 1, name }];
   }
   storeInLocalStorage(state.cardItems);
  },


  removeFromCard: (state, action) => {
   const tempCard = state.cardItems.filter((item) => item.id !== action.payload.id);
   state.cardItems = tempCard;
   storeInLocalStorage(state.cardItems);
  },
  clearCard: (state) => {
   state.cardItems = [];
   storeInLocalStorage(state.cardItems);
  },
  updateCardItemQuantity: (state, action) => {
   const tempCard = state.cardItems.map((item) => {
    if (item.id === action.payload.id) {
     let tempTotalPrice = action.payload.quantity * item.price;
     return { ...item, quantity: action.payload.quantity, totalPrice: tempTotalPrice };
    } else {
     return item;
    }
   });
   state.cardItems = tempCard;
   storeInLocalStorage(state.cardItems);
  },
  getCardTotal: (state) => {
   let { totalAmount, itemCount } = state.cardItems.reduce(
    (cartTotal, cardItem) => {
     const { price, quantity } = cardItem;
     const itemTotal = price * quantity;

     cartTotal.totalAmount += itemTotal;
     cartTotal.itemCount += quantity;

     return cartTotal;
    },
    {
     totalAmount: 0,
     itemCount: 0,
    }
   );

   state.itemCount = itemCount;
   state.totalAmount = totalAmount;
  },
 },
});


export const { addToCard, removeFromCard, clearCard, getCardTotal, updateCardItemQuantity } = cardSlice.actions;
export default cardSlice.reducer;
