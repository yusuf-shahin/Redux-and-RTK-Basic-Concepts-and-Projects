import React from "react"
import { removeItem, increment, decrement } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { ChevronDown, ChevronUp } from "../icons"

const CartItem = ({ id, img, title, price, amount }) => {
  // create to change state in store
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id))
            //# id === payload
            //# action.payload === id
          }}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button onClick={() => dispatch(increment(id))} className='amount-btn'>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button onClick={() => dispatch(decrement(id))} className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
