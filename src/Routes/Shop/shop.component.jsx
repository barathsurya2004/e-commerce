import { useEffect, useState } from "react"
import axios from 'axios';
import ProductCard from '../../components/Product-card/product-card.component.jsx'
import './shop.style.scss'
const Shop = () => {
    var shop_data = [];
    const [backend, setBackend] = useState([]);
    useEffect(() => {
        axios.get('https://e-com-db-1efc7-default-rtdb.asia-southeast1.firebasedatabase.app/.json').then((response) => {
            console.log(response.data[0]);
            setBackend(response.data[0].items)
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