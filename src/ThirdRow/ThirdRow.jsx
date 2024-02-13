import React from 'react'

function ThirdRow() {
    return (
        <>
        <div className="mt-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="flex flex-row p-10 relative bg-white shadow-lg rounded-xl">
                  <div className="bg-black  rounded-[50%] w-[80px] h-[80px] relative hidden xl:block">
                    <div className="bg-white rounded-[50%] w-[80px] h-[80px]">
                        <div style={{    top: "5px",left: "5px"}} className="bg-[#FEEDE4] p-6 rounded-[50%] w-[70px] h-[70px] absolute">
                        <i style={{color:"#CF5F26",fontSize:"22px"}} class="fas fa-suitcase"></i>
                        </div>

                    </div>
                  </div>
                  <div className='ml-[20px]'>
                    <h1 className='text-2xl font-bold'>25000 USD</h1>
                    <h1 className='text-xs text-[#778087]'>Total Sales</h1>
                  </div>
                  <div className="absolute flex flex-col justify-between right-0 space-y-4">
                  <div style={{left: "13px",bottom: "15px"}} className='relative bg-[#F2F1FD] rounded-[50%] w-[30px] h-[30px]'>
                  <i style={{top: "7px",left: "8px"}} class="fas fa-question text-[#9EA1AA]  absolute"></i>

                  </div>
                   <p style={{color:"#CD9571"}} className='text-lg mr-4'>+24%</p>
                  </div>

                </div>
                <div className="flex flex-row p-10 relative bg-white shadow-lg rounded-xl">
                  <div className="bg-black  rounded-[50%] w-[80px] h-[80px] relative hidden xl:block">
                    <div className="bg-white rounded-[50%] w-[80px] h-[80px]">
                        <div style={{    top: "5px",left: "5px"}} className="bg-[#F5F3FE] p-6 rounded-[50%] w-[70px] h-[70px] absolute">
                        <i style={{color:"#5841CF",fontSize:"22px"}} class="fas fa-chart-pie"></i>
                        </div>

                    </div>
                  </div>
                  <div className='ml-[20px]'>
                    <h1 className='text-2xl font-bold'>28000 USD</h1>
                    <h1 className='text-xs text-[#778087]'>Total Expenses</h1>
                  </div>
                  <div className="absolute flex flex-col justify-between right-0 space-y-4">
                  <div style={{left: "13px",bottom: "15px"}} className='relative bg-[#F2F1FD] rounded-[50%] w-[30px] h-[30px]'>
                  <i style={{top: "7px",left: "8px"}} class="fas fa-question text-[#9EA1AA]  absolute"></i>

                  </div>
                   <p style={{color:"#7972A3"}} className='text-lg mr-4'>-28%</p>
                  </div>

                </div>
                <div className="flex flex-row p-10 relative bg-white shadow-lg rounded-xl">
                  <div className="bg-black  rounded-[50%] w-[80px] h-[80px] relative hidden xl:block">
                    <div className="bg-white rounded-[50%] w-[80px] h-[80px]">
                        <div style={{    top: "5px",left: "6px"}} className="bg-[#EAFEF3] p-6 rounded-[50%] w-[70px] h-[70px] absolute">
                       
                        <i style={{color:"#34803E",fontSize:"22px"}} class="fas fa-users absolute left-[20px]"></i>
                        </div>

                    </div>
                  </div>
                  <div className='ml-[20px]'>
                    <h1 className='text-2xl font-bold'>23000</h1>
                    <h1 className='text-xs text-[#778087]'>Total Visitors</h1>
                  </div>
                  <div className="absolute flex flex-col justify-between right-0 space-y-4">
                  <div style={{left: "13px",bottom: "15px"}} className='relative bg-[#F2F1FD] rounded-[50%] w-[30px] h-[30px]'>
                  <i style={{top: "7px",left: "8px"}} class="fas fa-question text-[#9EA1AA]  absolute"></i>

                  </div>
                   <p style={{color:"#69896E"}} className='text-lg mr-4'>+45%</p>
                  </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default ThirdRow
