import React from 'react'
import { Outlet } from 'react-router-dom'
import Clients from './Clients'

function ClientsHome() {
    return (
        <>
        <Clients></Clients>
        <Outlet></Outlet>
        </>
    )
}

export default ClientsHome
