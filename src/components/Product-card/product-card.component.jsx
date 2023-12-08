import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
import './product-card.style.scss'
import { useContext } from 'react';

const ProductCard = (props) => {
    const { addToCartItems, cartItems, setCartItems } = useContext(IsCartonContext);

    const { product } = props;
    const onClickHandler = () => {
        addToCartItems(product, cartItems, setCartItems)
    }
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-card-footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <button className='addToCart' onClick={onClickHandler}>ADD TO CART</button>
        </div>

    )
}


export default ProductCard;