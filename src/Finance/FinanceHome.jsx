import React from 'react'
import { Outlet } from 'react-router-dom'
import Finance from './Finance'

function FinanceHome() {
    return (
        <>
        <Finance></Finance>
        <Outlet></Outlet>
        </>
    )
}

export default FinanceHome
