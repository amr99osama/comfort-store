import React from 'react'
// useSelector is used to access the Redux store state
import { useSelector } from 'react-redux'
import { CartItemsList, CartTotals, CheckoutForm, SectionTitle } from '../components'
import { redirect } from 'react-router-dom'
import toast from 'react-hot-toast'

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.error('You must be logged in to access the checkout page');
    return redirect('/login');
    // This loader function can be used to fetch any necessary data before rendering the component
    // Currently, it does not fetch any data but can be extended in the future
  }
  return null;
}
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <SectionTitle text="Your Cart is Empty" />
    )
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <CheckoutForm></CheckoutForm>
        <CartTotals></CartTotals>
      </div>
    </>
  )
}

export default Checkout