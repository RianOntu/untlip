import React from 'react'

function FinanceSecondRow() {
    return (
        <>
        <div className="flex flex-row items-center font-semibold mt-8">
            <div className="flex flex-row items-center">
                <h1 className='text-md md:text-2xl lg:text-5xl'>Orders</h1>
                <h3 className='ml-2 lg:ml-[30px] text-md lg:text-5xl' style={{display:"inline"}}>&#128525;</h3>
            </div>
            <div className="flex flex-row items-center ml-5 lg:ml-[50px] bg-[#D9D9DB] p-2 py-1  rounded-md">
               <h1 className='text-md md:text-lg font-medium bg-white p-2 py-1 px-4 ml-0 rounded-md'>Daily</h1>
             
               
               <h1 className='ml-3 text-md md:text-lg font-medium '>Monthly</h1>
               
               
            </div>
        </div>
        </>
    )
}

export default FinanceSecondRow
