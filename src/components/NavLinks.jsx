
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'about', text: 'about' },
    { id: 3, url: 'products', text: 'products' },
    { id: 4, url: 'cart', text: 'cart' },
    { id: 5, url: 'checkout', text: 'checkout' },
    { id: 6, url: 'orders', text: 'orders' },
];
const NavLinks = () => {
    const user = useSelector((state) => state.userState.user);
    return (
        <>
            {
                links.map((link) => {
                    const { id, url, text } = link;
                    if (url === 'orders' || url === 'checkout' && !user) {
                        return null; // Skip rendering if user is not logged in
                    }
                    return (
                        <li key={id}>
                            <NavLink
                                to={url}
                                className={({ isActive }) =>
                                    `capitalize text-neutral px-4 py-2 ${isActive ? 'bg-primary text-white' : ''
                                    }`
                                }
                            >
                                {text}
                            </NavLink>
                        </li>
                    );
                })
            }</>
    )
}

export default NavLinks