import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import validator from 'validator';
import { useDispatch } from 'react-redux'
import { startLogin, login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import { loginAPI } from '../../helpers/auth-helper';
import { finishLoading, startLoading } from '../../actions/ui';

export const LoginScreen = () => {

    let dispatch = useDispatch()
    let [{ email, password }, handleInputChange] = useForm({ email: '', password: '' })

    const [error, setError] = useState(null)

    const handleSignIn = async () => {
        dispatch( startLogin() )
    }

    const isValid = () => {
        if(email === '' || password === ''){
            setError('Email y/o contraseña inválido')
            return false
        }else if(!validator.isEmail(email)){
            setError('Emal inválido')
            return false
        }else{
            setError(null)
            return true
        }
    }

    const handleLogin = async () => {
        if(isValid()){
            dispatch( startLoading() )
            let resp = await loginAPI( email, password )
            if(resp.ok){
                let { user } = resp
                dispatch( login( user._id, user.displayName, user.email, user.photoURL, resp.token ) )
            }else{
                setError(resp.msg)
            }
            dispatch( finishLoading() )
        }
    }

    return (
        <div className='auth__screen container'>
            <div className='auth__container'>
                <div className='auth__wrap'>
                    <div className='nav__brand'>
                        <h1 className='font__brand'>
                            Goliber
                        </h1>
                    </div>
                    <p style={{ marginBottom: '18px', marginTop: '18px' }}>Iniciar sesión</p>
                    <div className='form-group mb-3'>
                        <label>Usuario</label> 
                        <input
                            className='form-control form-control-lg'
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Contraseña</label> 
                        <input
                            className='form-control form-control-lg'
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className='btn button__secondary w-100' style={{marginTop:'12px'}} onClick={handleLogin}>Ingresar</button>
                    {
                        error && <div style={{marginTop: '8px',}}><span style={{ color: 'var(--error-color)' }}>{error}</span></div> 
                    }
                    <div className='text-center'>
                        <p style={{ marginTop: '18px' }}>Iniciar sesión con Google</p>
                    </div>
                    <GoogleButton
                        onClick={ handleSignIn }
                        className='google__button'
                    />
                </div>
            </div>

        </div>
    )
}
