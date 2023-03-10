import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions/auth';
import { PrivateRouter } from './routes/PrivateRouter';
import { AuthRouter } from './routes/AuthRouter';
import { Navbar } from './components/shared/Navbar';
import { Loader } from './components/shared/Loader';
import { authMe } from './helpers/auth-helper';
import { finishLoading, startLoading } from './actions/ui';
import { Topbar } from './components/shared/Topbar';
import { AddRegisterButton } from './components/shared/AddRegisterButton';

export const Goliber = () => {
    
    let dispatch = useDispatch()

    let { uid } = useSelector( state => state.auth )
    let { loading } = useSelector( state => state.ui )
    
    const authUser = async () => {
        let token = localStorage.getItem('token')
        if(token){
            dispatch( startLoading() )
            let resp = await authMe(token)
            if(resp.ok){
                let { user } = resp
                dispatch( login( user._id, user.displayName, user.email, user.photoURL, resp.token ) )
                dispatch( finishLoading() )
            }else{
                localStorage.removeItem('token')
                dispatch( finishLoading() )
            }
        }
    }

    useEffect(() => {
        authUser()
        // eslint-disable-next-line
    }, [ ])
    

    return (
        <>
            { loading &&  <Loader /> }
            <Router>    
                {
                    uid
                    ?   
                        <>
                            <Topbar />
                            <div className='main__container container-fluid'>
                                <PrivateRouter />
                            </div>
                            <AddRegisterButton />
                            <Navbar />
                        </>
                    :   
                        <AuthRouter />
                }
            </Router>
        </>
    )
}
