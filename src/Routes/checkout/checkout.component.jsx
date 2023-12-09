import './checkout.style.scss';
import { useContext } from 'react';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';
export const CheckOut = () => {
    const { cartItems, addToCartItems, setCartItems, removeFromCartItems, total } = useContext(IsCartonContext);


    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => {
                return (


                    <CheckOutItem item={item} />


                )
            })}
            <span className='total'>Total : {total}</span>
        </div>
    )
}