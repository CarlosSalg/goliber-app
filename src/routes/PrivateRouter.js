import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { NewRegisterScreen } from '../components/spend/NewRegisterScreen';


export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" exact element={ <DashboardScreen /> }  />
            <Route path="/register/new" exact element={ <NewRegisterScreen /> }  />
            <Route path="/users" exact element={ <DashboardScreen /> }  />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}