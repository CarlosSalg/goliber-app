import React from 'react'
import { ReactComponent as Home } from '../icons/home.svg'
import { ReactComponent as Bars } from '../icons/bars.svg'
import { ReactComponent as User } from '../icons/user.svg'
import { ReactComponent as Wallet } from '../icons/wallet.svg'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="container">
                <div className='nav__container'>
                    <NavLink className={({ isActive }) => isActive ? 'nav__option active' : 'nav__option' } to="/">
                        <Home />
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav__option active' : 'nav__option' } to="/register">
                        <Wallet />
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav__option active' : 'nav__option' } to="/profile">
                        <User />
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav__option active' : 'nav__option' } to="/config">
                        <Bars />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
