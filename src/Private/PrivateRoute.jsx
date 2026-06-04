import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return (
            <div className="h-[97vh] flex items-center justify-center">
              <HashLoader color="#6e7070" />
            </div>
        );
    }
    if(!user){
        toast.error("You must be logged in to access this page.");
        return <Navigate to="/login" state={location.pathname} />;
        
    }
    
    return children;
        
    
};

export default PrivateRoute;