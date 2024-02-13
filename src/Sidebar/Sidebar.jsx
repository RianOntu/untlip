import React from 'react'
import svg1 from '../assets/svg1.svg'

function Sidebar() {
    return (
        <>
        
          <div className="bg-white p-6 hidden md:flex lg:flex  md:flex-col md:w-52 inset-y-0  shadow-md sm:h-screen sm:overflow-y-auto">
          <h1 className='text-2xl font-semibold mt-5 pl-6'>Untlip</h1>
                <a className='p-6 mt-20 text-[#9F9EA6]' href=""><i class="fas fa-tachometer-alt mr-2"></i>Dashboard</a>
             <a className='p-6 text-[#9F9EA6]' href=""><i class="fas fa-border-style mr-2"></i>Orders</a>
             <a className='p-6 text-[#9F9EA6]' href=""><i class="fas fa-users mr-2"></i>Clients</a>
             <a className='p-6 text-[#9F9EA6]' href="/statistics"><i class="fas fa-signal mr-2"></i>Statistics</a>
             <a className='p-6 text-[#9F9EA6]' href=""><i class="fas fa-piggy-bank mr-2"></i>Finance</a>
             <a className='p-6 text-[#9F9EA6]' href=""><i class="far fa-question-circle mr-2"></i>FAQ</a>
             <a className='p-6 text-[#9F9EA6]' href=""><i class="far fa-comments mr-2"></i>Support</a>
             <a className='p-6 text-[#9F9EA6]'  href=""><i class="fas fa-sign-out-alt mr-2"></i>Logout</a>
            
            
                
                <img className='pt-6 ' src={svg1} alt="" />
                <p className='font-bold p-6'>Upgrade your<br />plan</p>
                
            
          </div>
        </>
    )
}

export default Sidebar
