import './checkout-item.style.scss';
import { useContext } from 'react';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
export const CheckOutItem = ({ item }) => {
    const { cartItems, setCartItems, removeFromCartItems, addToCartItems } = useContext(IsCartonContext);
    const onClickRemove = (item, setCartItems, cartItems) => {
        const temp = cartItems.filter((element) => {
            if (element.id !== item.id) {
                return element;
            }
        })
        console.log(temp)
        setCartItems(temp);
    }
    return (
        <div key={item.id} className='checkout-item-container'>
            <div className='item-image-container'>
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <span className='name'>{item.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => { removeFromCartItems(item, cartItems, setCartItems) }}>
                    &#10094;
                </div>
                {item.stock}
                <div className='arrow' onClick={() => { addToCartItems(item, cartItems, setCartItems) }}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{item.price}</span>
            <div className='remove-button' onClick={() => onClickRemove(item, setCartItems, cartItems)}>
                &#10005;
            </div>

        </div>
    )

}