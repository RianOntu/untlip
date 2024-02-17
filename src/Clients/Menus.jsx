import React from 'react'
import ActiveLink1 from '../ActiveLink/ActiveLink1'

function Menus() {
    return (
        <>
        <div className="flex flex-row  overflow-x-auto mt-[50px] mb-[50px] justify-center">
        <ActiveLink1 className='p-6 text-[black] font-bold' to="allorders">All Orders</ActiveLink1>
             <ActiveLink1 className='p-6 text-[black] font-bold' to="pending-orders">Pending Orders</ActiveLink1>
             <ActiveLink1 className='p-6 text-[black] font-bold' to="delivered-orders">Delivered Orders</ActiveLink1>
             <ActiveLink1 className='p-6 text-[black] font-bold' to="booked-orders">Booked Orders</ActiveLink1>
             <ActiveLink1 className='p-6 text-[black] font-bold' to="cancelled-orders">Cancelled Orders</ActiveLink1>
        </div>
        </>
    )
}

export default Menus
