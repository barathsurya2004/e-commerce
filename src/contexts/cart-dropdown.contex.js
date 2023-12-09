import { useContext } from "react";
import { createContext, useState } from "react";


const checkExistingCartItem = (cartItems, cartItem) => {
    const existingItem = cartItems.find((item) => item.id === cartItem.id);
    if (existingItem) {
        return cartItems.map((item) => {
            if (item.id === cartItem.id) {
                return { ...item, stock: item.stock + 1 };
            }
            else {
                return item;
            }

        })
    }
    else {
        return [...cartItems, { ...cartItem, stock: 1 }];
    }

}

const removeitem = (cartItems, cartItem) => {
    const existingItem = cartItems.find((item) => item.id === cartItem.id);

    if (existingItem.stock === 1) {
        return cartItems.filter((item) => item.id !== existingItem.id);
    }
    else {
        return cartItems.map((item) => {
            if (item.id === existingItem.id) {
                return { ...item, stock: item.stock - 1 };
            }
            else {
                return item;
            }
        })
    }

}


export const IsCartonContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    addToCartItems: () => null,
    removeFromCartItems: () => null
})

/*
cartItems has {
    name,
    id,
    imageUrl,
    numberofitems

}

*/

export const IsCartonProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addToCartItems = (cartItem, cartItems, setCartItems) => {
        console.log('add to cart has been pressed by ' + cartItem.name);
        var temp = checkExistingCartItem(cartItems, cartItem);
        setCartItems(temp);
        console.log(cartItems)
    }
    const removeFromCartItems = (cartItem, cartItems, setCartItems) => {
        const temp = removeitem(cartItems, cartItem);
        setCartItems(temp);
        console.log(cartItems);
    }

    return <IsCartonContext.Provider value={{ isCartOpen, setIsCartOpen, addToCartItems, cartItems, setCartItems, removeFromCartItems }}>{children}</IsCartonContext.Provider>
}