import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { OrderPagination, OrdersList, SectionTitle } from '../components'
export const loader = (store) => async ({ request }) => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.error('You need to be logged in to view your orders.');
    return redirect('/login');
  }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  console.log(params)
  try {
    const response = await customFetch.get('/orders', {
      params,
      headers: { Authorization: `Bearer ${user.token}` }
    });
    console.log(response.data.data);
    return { orders: response.data.data, meta: response.data.meta };
  } catch (error) {
    const errorMessage = error.response?.data?.error?.message || 'Order failed. Please try again.';
    toast.error(errorMessage);
    if (error.response?.status === 401) {
      // handle unauthorized error
      console.log('Unauthorized access - perhaps you need to log in?');
      return redirect('/login');
    }
    console.log(error);
    return null;
  }
}
const Orders = () => {
  const { orders, meta } = useLoaderData();
  if (!orders || orders.length === 0) {
    return (
      <SectionTitle text="No Orders Found Yet" />
    )
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList orders={orders} />
      <OrderPagination />
    </>
  )
}

export default Orders