import React from 'react'
import { formatPrice } from '../utils';
import { useSelector } from 'react-redux';
const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState);
    return (
        <div className="card bg-base-200">
            <div className="card-body">
                {/* Cart Totals */}
                <p className="flex justify-between text-sm border-b border-base-300 pb-2">
                    <span>SubTotal</span>
                    <span className='font-medium'>{formatPrice(cartTotal)}</span>
                </p>
                <p className="flex justify-between text-sm border-b border-base-300 pb-2">
                    <span>Shipping</span>
                    <span className='font-medium'>{formatPrice(shipping)}</span>
                </p>
                <p className="flex justify-between text-sm border-b border-base-300 pb-2">
                    <span>tax</span>
                    <span className='font-medium'>{formatPrice(tax)}</span>
                </p>
                <hr />
                <p className="flex justify-between text-lg border-b border-base-300 pb-2">
                    <span className='font-bold'>Total </span>
                    <span className='font-medium font-bold'>{formatPrice(orderTotal)}</span>
                </p>
            </div>
        </div>
    )
}

export default CartTotals