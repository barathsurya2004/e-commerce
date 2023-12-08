import './product-card.style.scss'


const ProductCard = (props) => {
    const { product } = props;
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-card-footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <button>ADD TO CART</button>
        </div>

    )
}


export default ProductCard;