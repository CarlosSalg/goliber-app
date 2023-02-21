import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { showSpendModal } from '../../actions/ui'
import { ReactComponent as Logout } from '../icons/logout.svg'


export const Navbar = () => {

    let dispatch = useDispatch()
    let { photoURL } = useSelector( state => state.auth )
    const [showUserMenu, setShowUserMenu] = useState(false)

    const newSpend = async () => {
        dispatch( showSpendModal() )
    }

    const handleLogout = async () => {
        dispatch( startLogout() )
    }

    return (
        <nav className="nav">
            <div className="container">
                <div className='nav__container'>
                    <div className='nav__brand'>
                        <h3 className='font__brand'>
                            <img src='/assets/logo.svg' height="32" width="32" style={{ marginRight: '8px' }} alt="logo" /> Goliber
                        </h3>
                    </div>
                    <div className='nav__actions'>
                        <ul className='nav__menu'>
                            <li className='nav__menu-item' onClick={newSpend}>Registrar</li>
                        </ul>
                        <div className='nav__user-image' onClick={() => setShowUserMenu(!showUserMenu)}>
                            <img src={photoURL} referrerPolicy="no-referrer" alt='avatar' height="40" width="40" className='ofcover-rounded' />
                        </div>
                    </div>
                </div>
            </div>
            {
                showUserMenu &&
                <div className='navbar__user-menu'>
                    <ul className='nav__menu'>
                        <li className='nav__menu-item' onClick={handleLogout} ><Logout className='icon' /> Salir</li>
                    </ul>
                </div>
            }
        </nav>
    )
}
