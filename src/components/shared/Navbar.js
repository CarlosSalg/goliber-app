import React from 'react'
import { ReactComponent as Home } from '../icons/home.svg'
import { ReactComponent as Bars } from '../icons/bars.svg'
import { ReactComponent as User } from '../icons/user.svg'
import { ReactComponent as Wallet } from '../icons/wallet.svg'


export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="container">
                <div className='nav__container'>
                    <div className='nav__option active'>
                        <Home />
                    </div>
                    <div className='nav__option'>
                        <Wallet />
                    </div>
                    <div className='nav__option'>
                        <User />
                    </div>
                    <div className='nav__option'>
                        <Bars />
                    </div>
                </div>
            </div>
        </nav>
    )
}
