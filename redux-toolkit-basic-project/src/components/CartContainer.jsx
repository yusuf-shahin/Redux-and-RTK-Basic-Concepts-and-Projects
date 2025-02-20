import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
// card component
import CartItem from "./CartItem"

const CartContainer = () => {
  //@ despatch help us to set the action which is come from Slice
  const dispatch = useDispatch()
  // console.log(useSelector())

  //* get the initialState from Slice which is store in store.js ...
  const { cartItems, amount, total } = useSelector((store) => {
    //@ it is help us to delect the state
    return store.cart
  })
  //? basically our state render from storage, action happen in Slice . For that state of storage is chage by any action...

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>your bag is currently empty :( </h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
