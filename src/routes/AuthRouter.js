import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen'

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" exact element={ <LoginScreen /> }  />
            <Route path="/auth/login" exact element={ <LoginScreen /> }  />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}