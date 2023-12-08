import { createContext, useState } from "react";

export const IsCartonContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null
})


export const IsCartonProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return <IsCartonContext.Provider value={{ isCartOpen, setIsCartOpen }}>{children}</IsCartonContext.Provider>
}