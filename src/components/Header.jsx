import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/User/userSlice";
import { clearCart } from "../features/Cart/cartSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userState.user);

    const handleLogout = () => {
        navigate("/");
        dispatch(clearCart());
        dispatch(logOut());
    };

    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-elements flex justify-center sm:justify-end">
                {user ? (
                    <div className="flex gap-x-2 justify-center items-center mb-2 sm:justify-end">
                        <p className="text-xs sm:text-sm">Hello, {user.username}</p>
                        <button
                            className="btn btn-xs btn-outline btn-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-x-6 justify-center items-center mb-2">
                        <Link to="/login" className="link link-hover text-xs sm:text-sm">
                            Sign In / Guest
                        </Link>
                        <Link to="/register" className="link link-hover text-xs sm:text-sm">
                            Create Account
                        </Link>
                    </div>
                )}
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
