import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from "../../context/shop-context"


export const CartItem = (props) => {
  
const {cartItems, removeFromCart, addToCart, updateCartItemAmount } = useContext(ShopContext)
const {id, productName, price, productImage} = props.data

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'> <p><b>{productName}</b></p>
        <p>Php{price}</p>
        <div className='countHandler'>
            <button onClick={()=> removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}></input>
            <button onClick={()=> addToCart(id)}> + </button>
        </div>
        </div>
    </div>
  )
}
