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
            <div className='overflow-y-auto w-[100vw] md:w-[calc(100vw-13rem)] h-screen '>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    )
}

export default Home
