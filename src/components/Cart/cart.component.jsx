import './cart.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { useContext } from 'react';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(IsCartonContext);

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
            <span className='item-count'>0</span>
        </div>
    )
}


export default CartIcon;