import React from 'react'
import { Outlet, Link, useNavigation } from 'react-router-dom'
import { Header, Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      {isLoading ? <Loading /> : (
        <section className="align-elements py-20">
          <Outlet />
        </section>
      )}

      <div className='container mx-auto'>
        <footer className='bg-gray-800 text-white p-4'>
          <p>Copyright &copy; 2025 E-Commerce</p>
        </footer>
      </div>
    </>
  )
}

export default HomeLayout