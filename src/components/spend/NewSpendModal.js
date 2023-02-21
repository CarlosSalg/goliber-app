import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Switch from "react-switch";
import { ReactComponent as Close } from '../icons/close.svg'
import { ReactComponent as Happy } from '../icons/happy.svg'
import { hideSpendModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { Message } from '../shared/Message';
// import { newSpend } from '../../helpers/spend-helper';

export const NewSpendModal = () => {

    let dispatch = useDispatch()
    // let { uid } = useSelector( state => state.auth )
    let { spendModal } = useSelector( state => state.ui )

    const [spend, setSpend] = useState(false)
    const [error, setError] = useState(null)
    const [{ amount, date, note }, handleInputChange, reset ] = useForm({ amount:'', date: new Date().toJSON().slice(0,10), note:'' })

    const handleClose = () => {
        setSpend(false)
        reset()
        dispatch( hideSpendModal() )
        setError(null)
    }

    const handleChange = (checked) => {
        setSpend(checked)
    }

    const isValid = () => {
        if(amount === '' || amount < 1){
            setError('Cantidad no válida')
            return false
        }else if(date === ''){
            setError('Seleccione una fecha válida')
            return false
        }else if(date === ''){
            setError('Seleccione una fecha válida')
            return false
        }else{
            setError(null)
            return true
        }
    }

    const handleSave = async () => {
        if(isValid()){
            // let income = !spend;
            // let dateRef = date ? new Date(date) : new Date()
            // let resp =  newSpend( uid, amount, dateRef, note, income )
            // console.log(resp)
        }
    }

    return (
        <Modal 
            show={ spendModal }
            onHide={handleClose}
            fullscreen
            animation={false}
        >
            <div className='modal__container'>
                <div className='modal__header'>
                    <h3>Nuevo registro</h3>
                    <button className='no__button' onClick={handleClose}>
                        <Close className='icon' />
                    </button>
                </div>
                <hr />
                <div className='modal__body'>
                    <div className='form-group mb-3 d-flex align-items-center'>
                        <Switch onChange={handleChange} checked={spend} />
                        <label style={{ marginLeft: '12px', marginBottom: '0' }}>Ingreso { spend && <Happy className='icon' /> } </label>
                    </div>
                    <div className='form-group mb-3'>
                        <label>Cantidad</label> 
                        <input
                            className='form-control form-control-lg'
                            type="number"
                            name="amount"
                            value={amount}
                            onChange={handleInputChange}

                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Categoria</label> 
                        <select className='form-control form-control-lg'>
                            <option value="uno">uno</option>
                            <option value="uno">dos</option>
                            <option value="uno">tres</option>
                        </select>
                    </div>
                    <div className='form-group mb-3'>
                        <label>Fecha</label> 
                        <input
                            className='form-control form-control-lg'
                            type="date"
                            name="date"
                            value={date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Nota</label> 
                        <textarea
                            className='form-control form-control-lg'
                            rows="3"
                            name="note"
                            value={note}
                            onChange={handleInputChange}
                            placeholder="(opcional)"
                        ></textarea>
                    </div>
                    
                </div>
                {
                    error &&
                    <Message
                        type="error"
                        message={error}
                    />
                }
                <hr />
                <button className='btn button__primary w-100' onClick={handleSave}>Guardar</button>
                <br />
                <button className='btn button__secondary w-100' style={{ marginRight: '16px' }} onClick={handleClose}>Cancelar</button>
                <div className='modal__footer'>
                </div>
            </div>
        </Modal>
    )
}
