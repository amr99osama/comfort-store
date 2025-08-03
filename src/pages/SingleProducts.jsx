import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


// query FOR react-query for single products
const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`)
  }
}
export const loader = (queryClient) => async ({ params }) => {
  // const response = await customFetch(`/products/${params.id}`);
  const response = await queryClient.ensureQueryData(singleProductQuery(params.id));
  return { product: response.data.data };
};
const SingleProducts = () => {
  const { product } = useLoaderData();
  const { image, price, title, description, colors, company } = product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [productAmount, setProductAmount] = useState(1);

  const handleAmountChange = (e) => {
    setProductAmount(parseInt(e.target.value));
  }

  // construct product which will goes to cart
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount: productAmount, // Changed from amount to productAmount
    productColor,
    company,
  };

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* single product section */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* product image */}
        <div className="flex justify-center items-center">
          <img src={image} alt={title} className="h-9/10 w-full object-cover rounded-lg" />
        </div>
        {/* product details */}
        <div className="flex justify-center flex-col gap-y-4">
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          <p className="text-sm text-neutral-content">{company}</p>
          <p className="text-xl mt-3 font-semibold text-secondary">{dollarAmount}</p>
          <p className="text-md leading-8">{description}</p>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-gray-600">Colors:</span>
            {colors.map((color) => (
              <button
                key={color}
                type='button'
                className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`}
                style={{ backgroundColor: color, cursor: 'pointer' }}
                onClick={() => setProductColor(color)}
              ></button>
            ))}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="text-md font-medium capitalize text-gray-600">Amount:</label>
            <select
              className='select select-secondary select-bordered select-md'
              value={productAmount}
              onChange={handleAmountChange}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          <div className="mt-4">
            <button type='button' className="btn btn-primary mt-4 bt-md" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProducts;