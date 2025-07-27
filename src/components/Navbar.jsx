import React, { useEffect, useState } from 'react';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';
const themes = {
    winter: 'winter',
    dracula: 'dracula'
};

const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme') || themes.winter;
    return savedTheme
}

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);
    const handleTheme = () => {
        const { winter, dracula } = themes;
        const newTheme = theme === winter ? dracula : winter;
        setTheme(newTheme);
    };
    useEffect(() => {
        // Set the initial theme based on the user's preference or default to winter
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
        , [theme]);

    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart) || 0;

    return (
        <nav className='bg-base-200 shadow-md'>
            <div className="navbar align-elements">
                <div className="navbar-start">
                    {/* Nav Brand Logo */}
                    <NavLink to="/" className="btn btn-primary hidden text-xl lg:flex items-center">
                        Comfort
                    </NavLink>
                    {/* Dropdownn Menu for Mobile View */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className='h-6 w-6 text-2xl' />
                        </label>
                        <ul tabIndex={0} className='menu menu-small dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-100'>
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* /* theme toggle */}
                    <label className='swap swap-rotate'>
                        <input type="checkbox" onChange={handleTheme} />
                        <BsSunFill className='swap-on fill-current h-6 w-6' />
                        <BsMoonFill className='swap-off fill-current h-6 w-6' />
                    </label>
                    {/* /* cart Link */}
                    <NavLink to='/cart' className="btn btn-ghost btn-circle btn-md ml-4">
                        <div className="indicator">
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-xs badge-primary indicator-item'>{numItemsInCart}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar