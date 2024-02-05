import { NavLink } from 'react-router-dom'
import { NavLinkClass, NavLinkActiveClass } from '../../common/styles/classes'

export function NavBar() {
    return (
        <nav className="bg-slate-800 text-white flex justify-between sm:justify-end">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? NavLinkActiveClass : NavLinkClass
                }>
                Home
            </NavLink>
            <NavLink
                to="/products"
                className={({ isActive }) =>
                    isActive ? NavLinkActiveClass : NavLinkClass
                }>
                Products
            </NavLink>
            <NavLink
                to="/categories"
                className={({ isActive }) =>
                    isActive ? NavLinkActiveClass : NavLinkClass
                }>
                Categories
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? NavLinkActiveClass : NavLinkClass
                }>
                About
            </NavLink>
        </nav>
    )
}
