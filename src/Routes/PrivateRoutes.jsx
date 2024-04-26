import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to={"/signin"}></Navigate>
    );
};

export default PrivateRoutes;