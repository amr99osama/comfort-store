import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'
const Login = () => {

  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-2xl font-bold text-center'>Login</h4>
        <FormInput label='Email' type='email' name='identifier' defaultValue="test@test.com" />
        <FormInput label='Password' type='password' name='password' defaultValue="secret" />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
          <button type="button" className='btn btn-secondary btn-block'>
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