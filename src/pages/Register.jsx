import { Form, Link, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils';
import toast from 'react-hot-toast';


// create an action for register (we create an action when we attend to use API Call -- remember that)
// action used to handle POST Requests or Form Submissions
// Loaders are used to handle GET Requests and fetch data before rendering the component
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('Successfully Registered !');
    return redirect('/login');
  } catch (error) {
    const errorMessage = error.response?.data?.error?.message || 'Registration failed. Please try again.';
    toast.error(errorMessage);
    console.log(error);
    return null;
  }
}
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card bg-base-100 shadow-lg flex flex-col gap-y-4 p-8 rounded w-96'>
        <h4 className='text-center font-bold text-3xl mb-2'>
          Register
        </h4>
        <FormInput type="text" label='Username' name='username' />
        <FormInput type="email" label='Email Address' name='email' />
        <FormInput type="password" label='Password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center'>
          Already a Member? <Link to='/login' className='text-primary'>Login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register