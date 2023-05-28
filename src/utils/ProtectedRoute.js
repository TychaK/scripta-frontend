import React from "react";
import {Navigate} from "react-router-dom";
import {getFromLocalStorage} from "./local-storage";

const ProtectedRoute = ({children}) => {
    const user = getFromLocalStorage('user');
    return user?.token ? children : <Navigate to="/auth"/>;
}

export default ProtectedRoute;
