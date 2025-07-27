import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const CartItemsList = () => {
    const cartItems = useSelector((state) => state.cartState.cartItems);
    return (
        <>
            {cartItems.map((item) => (
                <CartItem key={item.cartID} className="cart-item" cartItem={item}>
                    Cart Item
                </CartItem>
            ))}
        </>
    )
}

export default CartItemsList