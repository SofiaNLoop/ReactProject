import React from 'react'

 
function Navbar() {
  return (
    <div >
       <div className='flex justify-end gap-20 ' >
           
           <ul className='flex gap-5 ms-4 me-4 mb-4 nav text-gray-500 '>
           <a href="#" className='logo'><img src="/src/assets/images/logo-blue-peaku.png" className='peaku'  alt="logo-peaku" /></a>
               <li className='hover:text-black'><a href="#">Empleos</a></li>
               <li className='hover:text-black'><a href="#">Bootcamp</a></li>
               <li className='hover:text-black'><a href="#">Sobre nosotros</a></li>
               <li className='hover:text-black'><a href="#">Para profesionales</a></li>
               <li className='hover:text-black'><a href="#">Para empresas</a></li>
                <div className="world ">
               <li className='flex cursor-pointer text-gray-500 hover:text-black'>
                <a href="#"><img src="/src/assets/icons/globe-svgrepo-com.svg" alt="Español" className='image'/></a>
                    <span>Español</span> 
                    <div className="box"></div>
               </li>
                </div>
               <li className='cursor-pointer'><a href="#"></a><img src="/src/assets/icons/bell-alt-svgrepo-com.svg" alt="campana" className='image campana' /></li>
               <div className="user flex gap-2 cursor-pointer">
                   <li><a href="#"></a><img src="/src/assets/icons/people04.svg" alt="usario"  className='image usuario' />   
                   </li>
                   <div >
                       <h4 className='text-xs my-1 text-center'>Name</h4>
                        <div className="additonal flex gap-1">
                          <p className='points'><span><img src="/src/assets/icons/diamond-svgrepo-com.svg" alt="diamond" className='image' /></span></p>
                          <span className='text-xs my-1'>5400</span>
                        </div>
                   </div>
               </div>
               
           </ul>
       </div>
    </div>
  )
}

export default Navbar