import React from 'react'

function SecondRow() {
    return (
        <>
        <div className="flex flex-row items-center font-semibold mt-8">
            <div className="flex flex-row items-center">
                <h1 className='text-lg md:text-5xl'>Statistics</h1>
                <i style={{color:"#F65C47"}} class="fas fa-signal text-lg md:text-4xl ml-4"></i>
            </div>
            <div className="flex flex-row items-center ml-[50px]">
               <h1 className='text-lg font-medium bg-white p-2 py-1 px-3 rounded-md'>Sales</h1>
               <h1 className='text-lg font-medium bg-[#F9F9F9] p-2 py-1 px-3 rounded-md ml-2'>Products</h1>
            </div>
        </div>
        </>
    )
}

export default SecondRow
