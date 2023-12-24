import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function MainRoute({children}) {
    const location = useLocation()
    if (location.pathname === '/'){
    return <Navigate to={'/dashboard'} replace></Navigate>
} else {
    return children
}
}
