import React from 'react'
import { Filters } from '../components';
import { ProductsContainer } from '../components';
import { PaginationContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';
export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),]);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  // console.log(meta);
  return { products, meta, params };
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />

    </>
  )
}

export default Products