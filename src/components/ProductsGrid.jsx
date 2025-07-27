import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils';

const ProductsGrid = () => {
    const { products } = useLoaderData();
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product) => {
                const { image, title, price } = product.attributes;
                const dollarAmount = formatPrice(price);
                const { id } = product;
                return (
                    <Link to={`/products/${id}`} key={id} className='card card-w-full card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-duration-300'>
                        <figure>
                            <img src={image} alt={title} className='h-64 rounded-xl w-full object-cover' />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title tracking-title capitalize'>{title}</h2>
                            <div className='card-actions justify-end'>
                                <span className='text-lg font-bold text-secondary'>{dollarAmount}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsGrid