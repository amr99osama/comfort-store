import React from 'react'
import { useSelector } from 'react-redux'
import { CartItemsList, SectionTitle, CartTotals } from '../components'
import { Link } from 'react-router-dom'
const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return (
      <SectionTitle text="Your Cart is Empty">
        <Link to="/" className="text-secondary underline">
          Go back to home
        </Link>
      </SectionTitle>
    )
  }
  return (
    <>
      <SectionTitle text="Your Cart"></SectionTitle>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4 pl-4">
          <CartTotals>
          </CartTotals>
          {user ? <Link to="/checkout" className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-md">
            Proceed to Checkout
          </Link> : <Link to="/login" className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-md">
            Login to Checkout
          </Link>
          }
        </div>
      </div>
    </>
  )
}

export default Cart