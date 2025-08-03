import React from 'react'
import Hero from '../components/Hero'
import { customFetch } from '../utils'
import { FeaturedProducts } from '../components'

const URL = '/products?featured=true'
const featuredProductsQuery =
{
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(URL)
}
export const loader = (queryClient) => async () => {
  // const response = await customFetch(URL);
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response)
  const products = response.data.data;
  return { products };

}
const Landing = () => {

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>

  )
}

export default Landing