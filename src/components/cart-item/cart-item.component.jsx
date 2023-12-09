import './cart-item.style.scss';

export const Cartitem = ({ item }) => {


    return (
        <div className='cart-item-container'>
            <img src={item.imageUrl} alt={item.name} />
            <div className='cart-item-detail'>
                <span className='name'>{item.name}</span>
                <span>{item.stock}x ${item.price}</span>
            </div>

        </div>
    )
}