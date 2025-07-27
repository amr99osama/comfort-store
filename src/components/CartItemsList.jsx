import React from 'react'
import { useSelector } from 'react-redux'
const CartItemsList = () => {
    const cartItems = useSelector((state) => state.cartState.cartItems);
    return (
        <>
            {cartItems.map((item) => (
                <div key={item.cartID} className="cart-item" cartItem={item}>
                    Cart Item
                </div>
            ))}
        </>
    )
}

export default CartItemsList