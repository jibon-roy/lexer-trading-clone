import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import MainRoute from './MainRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute><MainLayout></MainLayout></MainRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])


export default  router
