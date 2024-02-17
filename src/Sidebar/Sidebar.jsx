import React, { useEffect, useState } from 'react'
import svg1 from '../assets/svg1.svg'
import ActiveLink from '../ActiveLink/ActiveLink';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    console.log('clicked');
      
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('hamburger');
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(()=>{
    console.log(isOpen);
  
    isOpen===true?document.getElementById('hamburger').style.transform = "translateX(208px)":document.getElementById('hamburger').style.transform = "translateX(0px)"
  },[isOpen])


    return (
        <>
        <i class="fas fa-bars block sm:hidden" onClick={ToggleSidebar} id='hamburger'></i>
        <div  class={`${isOpen == true ? 'flex flex-col z-10 bg-white p-6 w-52  inset-y-0  shadow-md h-screen overflow-y-auto absolute' : 'hidden'}`}>
          <h1 className='text-2xl font-semibold mt-5 pl-6'>Untlip</h1>
                <ActiveLink className='p-6 mt-20 text-[#9F9EA6]' to="/dashboard"><i class="fas fa-tachometer-alt mr-2"></i>Dashboard</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/orders"><i class="fas fa-border-style mr-2"></i>Orders</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/clients"><i class="fas fa-users mr-2"></i>Clients</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/statistics"><i class="fas fa-signal mr-2"></i>Statistics</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/finance"><i class="fas fa-piggy-bank mr-2"></i>Finance</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/faq"><i class="far fa-question-circle mr-2"></i>FAQ</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/support"><i class="far fa-comments mr-2"></i>Support</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]'  to="/logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</ActiveLink>
            
            
                
                <img className='pt-6 ' src={svg1} alt="" />
                <p className='font-bold p-6'>Upgrade your<br />plan</p>
                
            
          </div>
       
          <div className="bg-white p-6 hidden md:flex lg:flex  md:flex-col md:w-52 inset-y-0  shadow-md sm:h-screen sm:overflow-y-auto">
          <h1 className='text-2xl font-semibold mt-5 pl-6'>Untlip</h1>
                <ActiveLink className='p-6 mt-20 text-[#9F9EA6]' to="/dashboard"><i class="fas fa-tachometer-alt mr-2"></i>Dashboard</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/orders"><i class="fas fa-border-style mr-2"></i>Orders</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/clients"><i class="fas fa-users mr-2"></i>Clients</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/statistics"><i class="fas fa-signal mr-2"></i>Statistics</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/finance"><i class="fas fa-piggy-bank mr-2"></i>Finance</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/faq"><i class="far fa-question-circle mr-2"></i>FAQ</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]' to="/support"><i class="far fa-comments mr-2"></i>Support</ActiveLink>
             <ActiveLink className='p-6 text-[#9F9EA6]'  to="/logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</ActiveLink>
            
            
                
                <img className='pt-6 ' src={svg1} alt="" />
                <p className='font-bold p-6'>Upgrade your<br />plan</p>
                
            
          </div>
        </>
    )
}

export default Sidebar



