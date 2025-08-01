
import { Form, redirect } from 'react-router-dom'
import FormsInput from './FormsInput'
import SubmitBtn from './SubmitBtn'
// import { customFetch, formatPrice } from '../utils'
// import toast from 'react-hot-toast'
// import { clearCart } from '../features/cart/cartSlice'
// action used to handle POST Requests or Form Submissions
// loaders are used to handle GET Requests and fetch data before rendering the component


export const action = (store) => async ({ request }) => {
    console.log(store);
    return null;
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