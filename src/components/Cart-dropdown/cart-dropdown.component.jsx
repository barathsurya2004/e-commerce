import './cart-dropdown.style.scss';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { useContext } from 'react';
import { Cartitem } from '../cart-item/cart-item.component';
const CartDropDown = () => {
    const { cartItems } = useContext(IsCartonContext);
    console.log(cartItems)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => {
                    return (
                        <Cartitem item={item} />
                    )
                })}
            </div>
            <button>Go To Checkout</button>
        </div>
    )
}

export default CartDropDown;