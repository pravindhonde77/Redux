import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


//To check if the user is authenticated,if yes,redirect/navigate him/her to
// the protected route/page,else navigate him/her to the login page

const ReqAuth = ({ children }) => {
    const auth = useSelector((store) => store.AuthReducer.isAuth)

    const location=useLocation()
  

    if (!auth) {
        //navigate to the login page
        return <Navigate to="/login" state={{from:location.pathname}} replace />

    }
    return children;


}

export default ReqAuth;