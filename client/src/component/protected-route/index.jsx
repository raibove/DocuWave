import { useAuth } from "@pangeacyber/react-auth";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ redirectTo = "/", children }) => {
    const { authenticated, login, logout, loading } = useAuth();

    useEffect(()=>{
        if(!authenticated && !loading){
            login();
        }
    }, [authenticated, loading])
    if(loading){
        return <h3>Loading...</h3>
    }
    
    return children ? children : <Outlet />
}

export default ProtectedRoute;