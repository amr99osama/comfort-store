import React from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice, generateAmountOptions } from '../utils'
import { removeItem, editItem } from '../features/cart/cartSlice'

const CartItem = ({ cartItem }) => {
    const { cartID, amount, title, price, image, company, productColor } =
        cartItem
    const dispatch = useDispatch();
    const removeItemFromCart = () => {
        dispatch(removeItem({ cartID }))
    }
    const handleAmountChange = (e) => {
        dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
    }

    return (
        <article
            key={cartID}
            className="mb-12 flex-col flex gap-y-4 sm:flex flex-row flex-wrap items-center border-b
        border-base-300 pb-4 last:border-b-0"
        >
            <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 h-32 object-cover flex-none"
            />
            {/* Cart Item Details -- */}
            <div className="px-4 flex-1 sm:ml-8 flex-1">
                <h3 className="text-sm font-semibold capitalize">{title}</h3>
                <p className="text-xs text-secondary">{company}</p>
                <p className="mt-2 text-xs font-bold capitalize flex items-center gap-x-4">
                    color:
                    <span
                        className="badge badge-sm"
                        style={{ backgroundColor: productColor }}
                    ></span>
                </p>
            </div>
            <div className="md:ml-16 sm:ml-0 xs:justify-between">
                {/* amount */}
                <div className="form-control max-w-xs">
                    <label htmlFor="amount" className="label-text">
                        Amount
                    </label>
                    <select
                        name="amount"
                        id="amount"
                        className="mt-2 select select-base select-bordered select-xs"
                        value={amount}
                        onChange={handleAmountChange}
                    >
                        {generateAmountOptions(amount + 5)}
                    </select>
                </div>
                {/* remove item */}
                <button
                    className="mt-4 btn btn-xs btn-secondary"
                    onClick={removeItemFromCart}
                >
                    Remove
                </button>
            </div>
            <div className="md:ml-24 sm:ml-24 flex-1 flex flex-col items-start xs:items-end">
                <p className="text-lg font-bold">{formatPrice(price)}</p>
            </div>
        </article>
    )
}

export default CartItem
