import React from 'react'

function Menus() {
    return (
        <>
        <div className="flex flex-row  overflow-x-auto mt-[50px] mb-[50px] justify-center">
        <a className='p-6 text-[#9F9EA6]' href="">All Orders</a>
             <a className='p-6 text-[#9F9EA6]' href="">Pending Orders</a>
             <a className='p-6 text-[#9F9EA6]' href="">Delivered Orders</a>
             <a className='p-6 text-[#9F9EA6]' href="">Booked Orders</a>
             <a className='p-6 text-[#9F9EA6]' href="">Cancelled Orders</a>
        </div>
        </>
    )
}

export default Menus
