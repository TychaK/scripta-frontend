import React from "react";
import {Navigate} from "react-router-dom";
import {getFromLocalStorage} from "./local-storage";

const AuthenticatedRoute = ({children}) => {
    const user = getFromLocalStorage('user');
    return user?.token ? <Navigate to="/account"/> : children;
}

export default AuthenticatedRoute;
