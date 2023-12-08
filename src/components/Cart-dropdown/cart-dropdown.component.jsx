import './cart-dropdown.style.scss';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { useContext } from 'react';
const CartDropDown = () => {
    const { cartItems } = useContext(IsCartonContext);
    console.log(cartItems)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => {
                    return (
                        <div>
                            {/* <img /> */}
                            <h3>{item.name}</h3>
                            <span>{item.stock}x{item.price}</span>
                        </div>

                    )
                })}
            </div>
            <button>Go To Checkout</button>
        </div>
    )
}

export default CartDropDown;