import './checkout.style.scss';
import { useContext } from 'react';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
export const CheckOut = () => {
    const { cartItems, addToCartItems, setCartItems, removeFromCartItems } = useContext(IsCartonContext);

    return (

        cartItems.map((item) => {
            return (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <span onClick={() => removeFromCartItems(item, cartItems, setCartItems)}>decrement</span>
                    <br />
                    <span>{item.stock}</span>
                    <br />
                    <span onClick={() => addToCartItems(item, cartItems, setCartItems)}>Increment</span>
                </div>

            )
        })
    )
}