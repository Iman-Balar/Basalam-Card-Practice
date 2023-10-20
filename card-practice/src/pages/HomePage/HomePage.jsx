import Cart from '../../components/cart/Cart';
import './homePage.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Basket from '../../components/basket/basket';

const HomePage = () => {

    const [productList , setProductList] = useState([])
    const [basketList , setBasketList] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((data) => {
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div dir="rtl" className="bg-light d-flex gap-1">
            {console.log(basketList)}
            <div className='w-25 h-100'>
                <Basket
                    basketList = {basketList}
                    setBasketList = {setBasketList}
                />
            </div>

            <div className='w-75 h-100  d-flex gap-2 flex-wrap justify-content-center align-items-center'>
            {productList.map(item => {
                return (
                    <div key={`productList-${item.id}`} className="home--cartContainer">
                        <Cart 
                            productId = {item.id}
                            productName = {item.title}
                            category = {item.category}
                            productRate = {item.rating.rate}
                            productRateCount = {item.rating.count}
                            productPrice = {item.price}
                            productTag = 'موجودی محدود'
                            productImg = {item.image}
                            basketList = {basketList}
                            setBasketList = {setBasketList}
                        />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default HomePage