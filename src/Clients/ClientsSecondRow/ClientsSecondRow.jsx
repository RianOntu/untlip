import React from 'react'

function ClientsSecondRow() {
    return (
        <>
             <div className="flex flex-row items-center font-semibold mt-8">
            <div className="flex flex-row items-center">
                <h1 className='text-lg md:text-5xl'>Clients</h1>
                <i style={{color:"black"}} class="fas fa-mars text-lg md:text-4xl ml-4"></i>
            </div>
            <div className="flex flex-row items-center ml-[50px]">
               <h1 className='text-lg font-medium bg-white p-2 py-1 px-3 rounded-md'>Details</h1>
               
            </div>
        </div>
        </>
    )
}

export default ClientsSecondRow
