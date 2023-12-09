import './checkout.style.scss';
import { useContext } from 'react';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';
export const CheckOut = () => {
    const { cartItems, addToCartItems, setCartItems, removeFromCartItems } = useContext(IsCartonContext);

    return (

        cartItems.map((item) => {
            return (
                <CheckOutItem item={item} />
            )
        })
    )
}