
import { Form, redirect } from 'react-router-dom'
import FormsInput from './FormsInput'
import SubmitBtn from './SubmitBtn'
import { customFetch, formatPrice } from '../utils'
import toast from 'react-hot-toast'
import { clearCart } from '../features/cart/cartSlice'
// action used to handle POST Requests or Form Submissions
// loaders are used to handle GET Requests and fetch data before rendering the component


export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;
    const info = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        cartItems,
        numItemsInCart
    }
    try {
        console.log(user)
        const response = await customFetch.post('/orders', { data: info },
            {
                headers: { Authorization: `Bearer ${user.token}` }
            }
        );
        console.log(response.data);
        // clear the cart after placing the order
        store.dispatch(clearCart());
        // show success message
        toast.success('Order placed successfully!');
        return redirect('/orders');
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
const CheckoutForm = () => {
    return (
        <Form method="POST" className="flex flex-col gap-y-4">
            <h4 className="font-medium text-xl">Shipping Information</h4>
            <FormsInput label="first name" name="name" type="text" />
            <FormsInput label="address" name="address" type="text" size='input-md' />
            <div className="mt-4">
                <SubmitBtn text="Place Your Order" />
            </div>
        </Form>
    )
}

export default CheckoutForm