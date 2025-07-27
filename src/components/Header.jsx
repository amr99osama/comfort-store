
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
const Header = () => {
    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-elements flex justify-center sm:justify-end">
                {/* /* USERRRS */}
                <div className="flex gap-x-6 justify-center items-center mb-2">
                    <Link to="/login" className="link link-hover text-xs sm:text-sm">
                        Sign In / Guest
                    </Link>
                    <Link to="/register" className="link link-hover text-xs sm:text-sm">
                        Create Account
                    </Link>
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header