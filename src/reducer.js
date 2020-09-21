import React from "react";

export const initialState = {
    basket: [
        {
            id: "3",
            title: "COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone..",
            image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphone-1868612__340.jpg",
            price: 59.99,
            rating: 5,
        },
        {
            id: "3",
            title: "COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone..",
            image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphone-1868612__340.jpg",
            price: 59.99,
            rating: 5,
        },
    ],
    user: null,
};

export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to Basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            // logic for removing item from Basket

            // Here we cloned the basket
            let newBasket = [...state.basket];

            // We check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id )

            if (index >= 0) {
            // Item exist in basket, remove it...
                newBasket.splice(index, 1);

            } else {
                console.warn(
                  `Can't remove product (id: ${action.id}) as its own `
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;