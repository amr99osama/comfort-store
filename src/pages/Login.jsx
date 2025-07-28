import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { store } from '../store'
import { loginUser } from '../features/User/userSlice'
import { useDispatch } from 'react-redux'
import { customFetch } from '../utils'
import toast from 'react-hot-toast';

// Action for login
// i cannot use HOOK here because this is an action .. i need to get store from the context 
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local', data);
    console.log(response.data);
    store.dispatch(loginUser(response.data.user));
    toast.success('Successfully Logged In !');
    return redirect('/');
  } catch (error) {
    const errorMessage = error.response?.data?.error?.message || 'Login failed. Please try again.';
    toast.error(errorMessage);
    console.log(error);
    return null;

  }
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      });
      dispatch(loginUser(response.data.user));
      toast.success('Logged in as Guest User!');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Failed to log in as Guest User. Please try again.');
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-2xl font-bold text-center'>Login</h4>
        <FormInput label='Email' type='email' name='identifier' defaultValue="test@test.com" />
        <FormInput label='Password' type='password' name='password' defaultValue="secret" />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
          <button type="button" className='btn btn-secondary btn-block' onClick={loginAsGuest}>
            Guest User
          </button>
        </div>
        <p className='text-center'>
          Don't have an account? <Link to='/register' className='text-primary'>Register</Link>
        </p>
      </Form>
    </section>
  )
}

export default Login