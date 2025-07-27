import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
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
          <SubmitBtn text='Login' />

        </div>
        <p className='text-center'>
          Already a Member? <Link to='/login' className='text-primary'>Login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register