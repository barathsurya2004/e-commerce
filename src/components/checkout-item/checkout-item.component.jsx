import './checkout-item.style.scss';

export const CheckOutItem = ({ item }) => {
    <div key={item.id}>
        <h2>{item.name}</h2>
        <span onClick={() => removeFromCartItems(item, cartItems, setCartItems)}>decrement</span>
        <br />
        <span>{item.stock}</span>
        <br />
        <span onClick={() => addToCartItems(item, cartItems, setCartItems)}>Increment</span>
    </div>
}