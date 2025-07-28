import React from 'react'
// useSelector is used to access the Redux store state
import { useSelector } from 'react-redux'
import { CartItemsList, CartTotals, CheckoutForm } from '../components'
const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.CartTotal);

  return (
    <div>Checkout</div>
  )
}

export default Checkout