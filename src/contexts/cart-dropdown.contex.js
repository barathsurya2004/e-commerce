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


export const IsCartonContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    addToCartItems: () => null
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

    return <IsCartonContext.Provider value={{ isCartOpen, setIsCartOpen, addToCartItems, cartItems, setCartItems }}>{children}</IsCartonContext.Provider>
}