import './cart-dropdown.style.scss';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cartitem } from '../cart-item/cart-item.component';

const CartDropDown = () => {
    const { cartItems, setIsCartOpen } = useContext(IsCartonContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/checkout');
        setIsCartOpen(false)
    }
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
            <button onClick={onClickHandler}>Go To Checkout</button>
        </div>
    )
}

export default CartDropDown;