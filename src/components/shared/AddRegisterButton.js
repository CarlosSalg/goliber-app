import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSpendModal } from '../../actions/ui'
import { ReactComponent as Plus } from '../icons/plus.svg'

export const AddRegisterButton = () => {

    let dispatch = useDispatch()
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
