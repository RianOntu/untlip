import React from 'react'
import svg1 from '../../assets/svg1.svg'

function ClientsThirdRow() {
    return (
        <>
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 grid-rows-12 gap-7">
              <div className="p-6 rounded-md shadow-lg row-span-12 bg-white">
              <div style={{top: "2px",left: "2px"}} className="bg-[#854685]  rounded-[50%] w-[200px] h-[200px] relative  mx-auto">
                    <div style={{top:"3px",left:"2px"}} className="bg-white rounded-[50%] w-[195px] h-[195px] absolute">
                        <div style={{    top: "7px",left: "7px"}} className="bg-[#FFF5FD] p-6 rounded-[50%] w-[181px] h-[181px] absolute">
                        <img src={svg1} alt="" />
                        </div>

                    </div>
                    <div style={{left:'159px',top:"26px"}} className="absolute">
                        <h1 className='text-xs text-white bg-[#EE5F30] px-2 rounded-md'>REPEATED</h1>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-3 mt-3 items-center mb-3">
                    <h1 className='text-4xl font-bold'>John Doe</h1>
                    <h1 style={{color:"slategray"}} className='text-sm'>shaikatkr034@gmail.com</h1>
                    <h1 className='text-lg'>+8801715762453</h1>
                  </div>
                  <hr className='mb-3' />
                  <div className="flex flex-row justify-center items-center p-3">
                    <button className='text-lg text-white font-medium bg-[#5744BA] p-2 py-1 px-3 rounded-md mr-3'><i class="fas fa-paper-plane mr-2"></i>Email</button>
                    <button className='text-lg text-black font-medium bg-white p-2 py-1 px-3 rounded-md border border-slate-300'><i class="fas fa-phone-alt mr-2"></i>Text</button>
                  </div>
              </div>
              <div className="p-6 rounded-md shadow-lg row-span-12 bg-white  relative">
              <h1 className='text-4xl font-bold mb-3'>Geographics</h1>
              <hr className='mb-3'/>
              <div className="mt-3 flex flex-col justify-center items-center">
                <div className="flex flex-row justify-start items-center p-6 rounded-md shadow-lg w-[100%] md:w-[80%]">
                    <div className='mr-0 md:mr-5 h-[40px] w-[40px] bg-[#FF581D] rounded-[50%] relative'>
                    <i style={{top:"12px",left:"11px"}} class="fas fa-phone-alt absolute text-white"></i>
                    </div>
                
                <div className="flex flex-col p-[10px]">
                    <h1 className='text-slate-500 font-semibold'>Contact</h1>
                    <h1 className='text-slate-500 font-semibold'>+8801723451287</h1>
                </div>
                </div>
                <div className="flex flex-row justify-start items-center p-6 rounded-md shadow-lg w-[100%] md:w-[80%]">
                <div className='mr-0 md:mr-5  h-[40px] w-[40px] bg-[#503AC3] rounded-[50%] relative'>
                    <i style={{top:"12px",left:"11px"}} class="fas fa-map absolute text-white"></i>
                    </div>
                
                <div className="flex flex-col p-[10px]">
                    <h1 className='text-slate-500 font-semibold'>Address</h1>
                    <h1 className='text-slate-500 font-semibold'>123,Street,New York</h1>
                </div>
                    </div>
                    <div className="flex flex-row justify-start items-center p-6 rounded-md shadow-lg w-[100%] md:w-[80%]">
                    <div className='mr-0 md:mr-5  h-[40px] w-[40px] bg-[#0A842D] rounded-[50%] relative'>
                    <i style={{top:"12px",left:"13px"}} class="fas fa-calendar-week absolute text-white"></i>
                    </div>
                
                <div className="flex flex-col p-[10px]">
                    <h1 className='text-slate-500 font-semibold'>Last Visit</h1>
                    <h1 className='text-slate-500 font-semibold'>February 24,2021</h1>
                </div>
                    </div>
              </div>
              <div className="absolute right-[16px] bottom-[14px] md:right-0 md:bottom-0 p-[13px] md:p-6">
                <div className="flex flex-row items-center relative right-[12px] md:right-[63px] lg:right-[84px]">
                <i style={{color:"#DBAB84"}} class="fas fa-redo mr-2"></i>
                <h1 className='text-slate-500 font-semibold'>Repeated Client</h1>
                </div>
              </div>
              </div>
             
             <div className="p-6 row-span-6 rounded-md shadow-lg relative bg-white">
             <h1 className='text-xl lg:text-4xl font-bold mb-3'>Orders</h1>
             <hr className='mb-3'/>
             <div className="mt-3 flex flex-row justify-between">
                <div>
                <h1 className='text-xl lg:text-4xl font-bold mb-3'>50<sub className='text-slate-500 font-semibold'>(Total)</sub></h1>
                </div>
                <div className="bg-white border-2 border-slate-300 rounded-[50%] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] relative"><i style={{color:"#236F4C"}} class="fas fa-level-up-alt left-[4px] top-[4px] lg:top-[8px] lg:left-[12px] absolute text-[10px] lg:text-[20px]"></i></div>
             
             </div>
             <h1 style={{color:"#236F4C"}} className='font-semibold absolute right-0 bottom-0 p-6'>Impression Increased</h1>
</div>
<div className="p-6 row-span-6 rounded-md shadow-lg relative bg-white">
<h1 className='text-xl lg:text-4xl font-bold mb-3'>Order Cost</h1>
             <hr className='mb-3'/>
             <div className="mt-3 flex flex-row justify-between">
                <div>
                <h1 className='text-xl lg:text-4xl font-bold mb-3'>2500<sub className='text-slate-500 font-semibold'>USD</sub></h1>
                </div>
                <div className="bg-white border-2 border-slate-300 rounded-[50%] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] relative"><i style={{color:"#E5673E"}} class="fas fa-level-down-alt  left-[4px] top-[4px] lg:left-[12px] lg:top-[8px] absolute text-[10px] lg:text-[20px] "></i></div>
             
             </div>
             <h1 style={{color:"#E5673E"}} className='font-semibold absolute right-0 bottom-0 p-6'>Impression Decreased</h1>
</div>
            
            </div>
        </div>
        </>
    )
}

export default ClientsThirdRow
