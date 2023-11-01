import {MdStoreMallDirectory , MdStar , MdAttachMoney} from 'react-icons/md';
import './cart.css';

const Cart = (props) => {
    return (
        <header className='w-100 bg-white p-4'>
            <section className='w-100 cart--imgContainer position-relative'>
                <img className='w-100 h-100' src={props.productImg}/>
                <detail className='cart--tag position-absolute top-0 px-3 py-1 text-white'>
                    <span>{props.productTag}</span>
                </detail>
            </section>
            <h5 className='mt-2 mb-0 cart--textnowrap'>{props.productName}</h5>
            <p className='d-flex align-items-center gap-2 mb-0 text-black-50'>
                <MdStoreMallDirectory/>
                <span>{props.category}</span>
            </p>
            <p className='d-flex align-items-center gap-1'>
                <MdStar className='text-black-50'/>
                <h5 className='m-0'>{props.productRate}</h5>
                <detail className='fs-7 text-black-50'>
                    (
                        <span>{props.productRateCount}</span>
                        نظر
                    )
                </detail>
            </p>
            <section className='d-flex justify-content-between'>
                <figure>
                    <button className='cart-addBtn rounded d-flex justify-content-center align-itmes-center p-0 fs-3'
                        onClick={() => props.setBasketList([...props.basketList , 
                            {productName : props.productName , 
                                productId : props.productId ,
                                productPrice : props.productPrice}])}
                    >+</button>
                </figure>
                <section>
                    <h3>
                        <span>{props.productPrice}</span>
                        <MdAttachMoney/>
                    </h3>
                </section>
            </section>
        </header>
    )
}

export default Cart