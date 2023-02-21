import React, { useState } from 'react'
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Happy } from '../icons/happy.svg'
import { useForm } from '../../hooks/useForm';
import { NavigateBack } from '../shared/NavigateBack';
import { newRegister } from '../../helpers/balance-helper';
import { startLoading, finishLoading } from '../../actions/ui';

export const NewRegisterScreen = () => {

    let { token } = useSelector( state => state.auth )
    let dispatch = useDispatch()

    const [spend, setSpend] = useState(false)
    const [error, setError] = useState(null)
    const [initial, setInitial] = useState(true)
    const [back, setBack] = useState(false)
    const [{ amount, date, note }, handleInputChange ] = useForm({ amount:'', date: new Date().toJSON().slice(0,10), note:'' })

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
            let dateRef = date ? new Date(date) : new Date()
            dispatch( startLoading() )
            let resp = await newRegister( token, dateRef, amount, spend, '63efee9a9ab5a126947413ea', note )
            if(resp.ok) setBack(true)
            dispatch( finishLoading() )
        }
    }    

    return (
        <div 
            className={ initial
                ? 'section__container container-fluid pb-4 animate__animated animate__slideInRight' 
                : 'section__container container-fluid pb-4 animate__animated animate__slideOutRight'
            }>
            <NavigateBack
                setInitial={setInitial}
                back={back}
            />
            <div className='form-group mb-3 d-flex align-items-center'>
                <Switch onChange={handleChange} checked={spend} />
                <label style={{ marginLeft: '12px', marginBottom: '0' }}>Ingreso { spend && <Happy className='icon' /> } </label>
            </div>
            <div className='form-group mb-3'>
                <label>Cantidad</label> 
                <input
                    className='form-control'
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleInputChange}

                />
            </div>
            <div className='form-group mb-3'>
                <label>Categoria</label> 
                <select className='form-control'>
                    <option value="uno">uno</option>
                    <option value="uno">dos</option>
                    <option value="uno">tres</option>
                </select>
            </div>
            <div className='form-group mb-3'>
                <label>Fecha</label> 
                <input
                    className='form-control'
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group mb-3'>
                <label>Nota</label> 
                <textarea
                    className='form-control'
                    rows="3"
                    name="note"
                    value={note}
                    onChange={handleInputChange}
                    placeholder="(opcional)"
                ></textarea>
            </div>
                
            {
                error && <span>{error}</span>
            }
            <button className='btn button__primary w-100' onClick={handleSave}>Guardar</button>
            <button className='btn button__secondary w-100 mt-2' onClick={() => setBack(true)}>Cancelar</button>

        </div>
    )
}
