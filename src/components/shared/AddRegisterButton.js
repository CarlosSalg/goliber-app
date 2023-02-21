import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Plus } from '../icons/plus.svg'

export const AddRegisterButton = () => {

    let navigate = useNavigate()

    const handleOpen = () => {
        navigate('/register/new')
    }

    return (
        <div className='register__button' onClick={handleOpen}>
            <Plus />
        </div>
    )
}
