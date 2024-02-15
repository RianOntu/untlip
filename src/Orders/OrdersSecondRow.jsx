import React from 'react'

function OrdersSecondRow() {
    return (
        <>
          <div className="flex flex-row items-center font-semibold mt-8">
            <div className="flex flex-row items-center">
                <h1 className='text-md md:text-2xl lg:text-5xl'>#123245</h1>
                <h3 className='ml-2 lg:ml-[30px] text-md lg:text-5xl' style={{display:"inline"}}>&#128525;</h3>
            </div>
            <div className="flex flex-row items-center ml-5 lg:ml-[50px]">
               <h1 className='text-md md:text-lg font-medium bg-white p-2 py-1 px-3 rounded-md'>Products</h1>
               <div className="flex flex-row ml-2 lg:ml-[50px] items-center">
               <i style={{color:"#3C987A"}} class="fas fa-check-circle mr-2"></i>
               <h1 className='text-md md:text-lg font-medium '>Delivered</h1>
               </div>
               
            </div>
        </div></>
    )
}

export default OrdersSecondRow
