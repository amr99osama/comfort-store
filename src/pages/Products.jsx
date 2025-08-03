import React from 'react'
import { Filters } from '../components';
import { ProductsContainer } from '../components';
import { PaginationContainer } from '../components';
import { customFetch } from '../utils';
const url = '/products';


// create react query for products 
const allProductsQuery = (queryParams) => {
  const { search, categroy, company, sort, price, shipping, page } = queryParams;
  return {
    queryKey: ['products', search ?? '', categroy ?? 'all', company ?? 'all', sort ?? 'a-z', price ?? 100000, shipping ?? false, page ?? 1],
    queryFn: () => customFetch(url, { queryParams })
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),]);
  // const response = await customFetch(url, { params });
  const response = await queryClient.ensureQueryData(allProductsQuery(params));
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