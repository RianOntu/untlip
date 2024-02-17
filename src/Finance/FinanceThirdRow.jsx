import React from 'react'
import './FinanceThirdRow.css'

function FinanceThirdRow() {
    return (
        <>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="flex flex-col p-3 bg-[#EBF8FF] rounded-lg pl-1 lg:pl-[0.5rem] xl:pl-[3.5rem] ">
                <h1 className="text-lg xl:text-2xl font-bold">New Orders</h1>
                <div className="flex flex-row items-center py-3">
                    <h1 className='text-lg xl:text-3xl text-[#115497] font-bold'>245</h1>
                    <p style={{fontSize:"25px",color:"#6C82A0"}} className='ml-5'>|</p>
                    <h1 className='text-lg ml-5 mr-2'>Impression - 20%</h1>
                    <div className='relative w-[40px] h-[40px] bg-white rounded-[50%] border-2 ml-2'>
                    <i class="fas fa-level-up-alt text-[#79799A] absolute left-[12px] sm:left-[7px] xl:left-[12px] top-[8px] icon"></i>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-3 bg-[#F5F3FE] rounded-lg pl-1 lg:pl-[0.5rem] xl:pl-[3.5rem] ">
                <h1 className="text-lg xl:text-2xl font-bold">Pending Orders</h1>
                <div className="flex flex-row items-center py-3">
                    <h1 className='text-lg xl:text-3xl text-[#49389E] font-bold'>123</h1>
                    <p style={{fontSize:"25px",color:"#787489"}} className='ml-5'>|</p>
                    <h1 className='text-lg ml-5 mr-2'>Impression - 11%</h1>
                    <div className='relative w-[40px] h-[40px] bg-white rounded-[50%] border-2 ml-2'>
                    <i class="fas fa-level-down-alt text-[#7991B1] absolute left-[12px] sm:left-[7px] xl:left-[12px] top-[8px] icon"></i>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-3 bg-[#FEEBE3] rounded-lg pl-1 lg:pl-[0.5rem] xl:pl-[3.5rem] ">
                <h1 className="text-lg xl:text-2xl font-bold">Delivered Orders</h1>
                <div className="flex flex-row items-center py-3">
                    <h1 className='text-lg xl:text-3xl text-[#ED703F] font-bold'>150</h1>
                    <p style={{fontSize:"25px",color:"#D0AA9C"}} className='ml-5'>|</p>
                    <h1 className='text-lg ml-5 mr-2'>Impression - 20%</h1>
                    <div className='relative w-[40px] h-[40px] bg-white rounded-[50%] border-2 ml-2'>
                    <i class="fas fa-level-up-alt text-[#D1A38D] absolute left-[12px] sm:left-[7px] xl:left-[12px]  top-[8px] icon"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FinanceThirdRow
