import Cart from '../../components/cart';
import './homePage.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [productList , setProductList] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((data) => {
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div dir="rtl" className="bg-light d-flex gap-2 flex-wrap justify-content-center align-items-center">

            {productList.map(item => {
                return (
                    <div key={`productList-${item.id}`} className="home--cartContainer">
                        <Cart 
                            productName = {item.title}
                            category = {item.category}
                            productRate = {item.rating.rate}
                            productRateCount = {item.rating.count}
                            productPrice = {item.price}
                            productTag = 'موجودی محدود'
                            productImg = {item.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage