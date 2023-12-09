import './cart.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { useContext } from 'react';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(IsCartonContext);
    const noOfCartItems = cartItems.reduce((acc, item) => {
        return (
            acc + item.stock
        )
    }, 0);

    const changeState = () => {
        if (isCartOpen) {
            setIsCartOpen(false);
        } else {
            setIsCartOpen(true);
        }
    }
    return (
        <div className='cart-icon-container' onClick={changeState}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{noOfCartItems}</span>
        </div>
    )
}


export default CartIcon;