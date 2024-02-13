import React from 'react'
import './FirstRow.css'

function FirstRow() {
    return (
        <>
        <div className="flex  md:flex-row justify-between  max-w-[100vw]">
            <div className="flex items-center">
            <i class="fas fa-calendar-plus mr-2 text-2xl text-[#6C5CBD]"></i><h1 className='text-lg md:text-2xl font-bold'>December 19,2021</h1>
            </div>
            <div className="flex items-center md:mr-[3rem] ">
            <div className='relative hidden lg:block'>
            <input className='placeholder-margin pl-[24px]  border border-slate-100 rounded-[50px] p-2 w-80 shadow-sm focus:border focus:outline-none ' type="text" name="" id="" placeholder='Search by name,date or id...' />
          
            <i class="fas fa-search text-[#494C55] p-2 absolute bg-[#F4F4F4] rounded-[50%] right-1 top-[5px]"></i>
            </div>
            <i class="fas fa-search text-[#494C55] p-2 lg:hidden block absolute bg-[#F4F4F4] rounded-[50%] mr-5"></i>
           
            <i class="far fa-bell text-[#494C55] p-2  bg-[white] rounded-[50%] ml-[43px] lg:ml-8 font-medium"></i>
           <p style={{fontSize:"29px",color:"gray"}} className='ml-[30px] hidden md:block '>|</p>
            
            <div className="relative ml-[30px] bg-[#B2CFF6] w-[40px] h-[40px] rounded-[50%] hidden md:block">
            <i style={{left: "10px",top: "11px",fontSize: "23px"}} class="fas fa-user-tie absolute"></i>
            <i style={{color:"#02E4B5",fontSize:"12px",top: "5px",left: "30px",borderColor: "white",backgroundColor:"white",width: "15px",height: "15px",borderRadius: "50%",padding: "2px"}} class="fas fa-circle absolute"></i>
            </div>
            </div>
        </div>
        </>
    )
}

export default FirstRow
