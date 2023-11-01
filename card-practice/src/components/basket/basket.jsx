import {Button} from 'react-bootstrap';
import './basket.css';

const Basket = (props) => {
    return(
        <header className='basket--container w-100 h-100 bg-white'>
            <section className='basket--itemList w-100'>
                {props.basketList.map(item => {
                    return (
                        <main className='w-100 d-flex justify-content-between align-items-center'>
                            <p className='cart--textnowrap w-75'>{item.productName}</p>
                            <detail>
                            <span>{item.productPrice}</span>
                            <Button className='buyBtn'
                                onClick={() => props.setBasketList(props.basketList.filter(product => product.productId != item.productId))}
                            >-</Button>
                            </detail>
                        </main>
                    )
                })}
            </section>
            <section className='w-100 h-25 d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center'>
                    <span>
                        {props.basketList.reduce((sum,current) => sum+current.productPrice , 0)} $
                    </span>
                </h3>
                <Button className="buyBtn">خرید</Button>
            </section>
        </header>
    )
}

export default Basket