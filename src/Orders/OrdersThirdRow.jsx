import React from 'react'
import './OrdersThirdRow.css'
import svg1 from '../assets/svg1.svg'


function OrdersThirdRow() {
    return (
        <>
        <div className="flex flex-col lg:flex-row mt-[70px] justify-between items-start">
            <div className="grid mx-auto lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">

          
  <div class="w-60 min bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
    <h1 className='text-md font-bold text-[#E15F2D] absolute price'>$112</h1>
    <a href="#">
      <img  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover padding" />
      <div class="px-4 py-3 w-72 lg:pr-[4rem] flex flex-row justify-between items-center flame">
        
       <div>
       <p class="text-md xl:text-lg font-bold text-black truncate block capitalize">Decorative Plants</p>
        <span class="text-gray-400 mr-3 uppercase text-xs">Quantity-1</span>
       </div>
       <div className='bg-white w-[20px] h-[20px] rounded-[50%] border-2 relative p-6 mini'>
       <i style={{color:"#E15F2D"}} class="fas fa-fire absolute text-2xl top-[5px] left-[16px]"></i>
       <h1 className='text-xs text-white bg-[#E15F2D] px-2 rounded-md absolute top-[-5px]'>HOT</h1>
       </div>
       
      </div>
    </a>
  </div>

  <div class="w-60 min bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
  <h1 className='text-md font-bold text-[#6B5BA4] absolute price'>$120</h1>
    <a href="#">
      <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover padding" />
      <div class="px-4 py-3 lg:pr-[4rem] w-72 flex flex-row justify-between items-center flame">
        
        <div>
        <p class="text-md xl:text-lg font-bold text-black truncate block capitalize">Sticky Calender</p>
        <span class="text-gray-400 mr-3 uppercase text-xs">Quantity-1</span>
        </div>
        <div className='bg-white w-[20px] h-[20px] rounded-[50%] border-2 relative p-6 mini'>
       <i style={{color:"#6B5BA4"}} class="fas fa-fire absolute text-2xl top-[5px] left-[16px]"></i>
       <h1 className='text-xs text-white bg-[#6B5BA4] px-2 rounded-md absolute top-[-5px]'>HOT</h1>
       </div>
      </div>
      
    </a>
  </div>

  <div class="w-60 min bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
  <h1 className='text-md font-bold text-[#6B5BA4] absolute price'>$250</h1>
    <a href="#">
      <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover padding" />
      <div class="px-4 py-3 w-72 lg:pr-[4rem] flex flex-row justify-between items-center flame">
        
       <div>
       <p class="text-md xl:text-lg font-bold text-black truncate block capitalize">Crystal Mug</p>
        <span class="text-gray-400 mr-3 uppercase text-xs">Quantity-1</span>
       </div>
        <div className='bg-white w-[20px] h-[20px] rounded-[50%] border-2 relative p-6 mini'>
       <i style={{color:"#6B5BA4"}} class="fas fa-fire absolute text-2xl top-[5px] left-[16px]"></i>
       <h1 className='text-xs text-white bg-[#6B5BA4] px-2 rounded-md absolute top-[-5px]'>HOT</h1>
       </div>
      </div>
    </a>
  </div>
  
  <div class="w-60 min bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
  <h1 className='text-md font-bold text-[#007421] absolute price'>$250</h1>
    <a href="#">
      <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover padding" />
      <div class="px-4 py-3 w-72 lg:pr-[4rem] flex flex-row justify-between items-center flame">
        
      <div>
      <p class="text-md xl:text-lg font-bold text-black truncate block capitalize">Motion Table Lamp</p>
        <span class="text-gray-400 mr-3 uppercase text-xs">Quantity-1</span>
      </div>
        <div className='bg-white w-[20px] h-[20px] rounded-[50%] border-2 relative p-6 mini'>
       <i style={{color:"#007421"}} class="fas fa-fire absolute text-2xl top-[5px] left-[16px]"></i>
       <h1 className='text-xs text-white bg-[#007421] px-2 rounded-md absolute top-[-5px]'>HOT</h1>
       </div>
      </div>
    </a>
  </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col mx-auto lg:mx-0 customer">
            <div className="pt-[5.5rem]    rounded-xl shadow-lg 2xl:p-36  bg-white relative customer-inner">
            <h1 className='text-xl font-bold absolute top-[41px] left-[34px]'>Customer Information</h1>
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
                  <div className="flex flex-col justify-center p-3 mt-3 items-center mb-3 space-y-3">
                    <h1 className='text-4xl font-bold'>John Doe</h1>
                    <h1 style={{color:"slategray"}} className='text-sm'>shaikatkr034@gmail.com</h1>
                    <h1 className='text-lg'>+8801715762453</h1>
                  </div>
                  
                  
              </div>
              <div className="p-6 rounded-md shadow-lg  bg-white relative address lg:mt-5">
            <div className="flex flex-row justify-between">
                <div className='space-y-3 ship'>
                <h1 className='text-lg font-bold '>Shipping Address</h1>
                <h1 style={{color:"slategray"}} className='text-sm'>123,Main Street,</h1>
                <h1 style={{color:"slategray"}} className='text-sm'>New York,</h1>   
                <h1 style={{color:"slategray"}} className='text-sm'>NY,10030</h1>   
                </div>
                <div>
                <div className='bg-white w-[20px] h-[20px] rounded-[50%] border-2 relative p-6 '>
       <i style={{color:"#6B5BA4"}} class="fas fa-map absolute text-2xl top-[8px] left-[10px]"></i>
      
       </div>
                </div>
            </div>
            <div className='space-y-3 mt-3 ship'>
            <h1 className='text-lg font-bold'>Billing Address</h1>
                <h1 style={{color:"slategray"}} className='text-sm'>156,Main Street,</h1>
                <h1 style={{color:"slategray"}} className='text-sm'>New York,</h1>   
                <h1 style={{color:"slategray"}} className='text-sm'>NY,4523</h1>  
            </div>
                  
              </div>
            </div>
        </div>
        </>
    )
}

export default OrdersThirdRow
