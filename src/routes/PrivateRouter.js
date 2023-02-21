import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';


export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" exact element={ <DashboardScreen /> }  />
            <Route path="/users" exact element={ <DashboardScreen /> }  />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}