import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <>
        <div className="flex">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    )
}

export default Home
