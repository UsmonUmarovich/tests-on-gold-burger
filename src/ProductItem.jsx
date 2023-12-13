import React from 'react'
import { useCart } from 'react-use-cart'

function ProductItem(props) {
  const { addItem } = useCart()

  return (
    <div className="products-cards">
        <div className="products-card" data-aos="fade-right">
            <img src={props.img} className='products-img' alt="fast food" />
            <h1 className='products-name'>{props.title}</h1>
            <span className='products-description'>{props.desc}</span>
            <span className='products-price'>{props.price}</span>
            <button className="products-backet" onClick={() => addItem(props.item)}>Savatga qo'shish</button>
        </div>
    </div>
  )
}

export default ProductItem