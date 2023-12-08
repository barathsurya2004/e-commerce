import { useEffect, useState } from "react"
import axios from 'axios';
import ProductCard from '../../components/Product-card/product-card.component.jsx'
import './shop.style.scss'
const Shop = () => {
    var shop_data = [];
    const [backend, setBackend] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/data').then((response) => {
            console.log(response.data);
            setBackend(response.data)
        })
    }, [])

    console.log(shop_data)
    return (
        <div className="products-container">
            {backend.map((element) => {
                return (
                    <ProductCard key={element.id} product={element} />
                )

            })}
        </div>

    )
}


export default Shop;