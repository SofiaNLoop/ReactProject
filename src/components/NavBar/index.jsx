import React from 'react'

 
function Navbar() {
  return (
    <div >
       <div className='flex justify-end gap-20  content-center' >
           <a href="#" className='logo'><img src="/src/assets/images/logo-blue-peaku.png" alt="logo-peaku" /></a>
           <ul className='flex gap-6 ms-8 me-4 nav '>
               <li><a href="#"></a>Empleos</li>
               <li><a href="#"></a>Bootcamp</li>
               <li><a href="#"></a>Sobre nosotros</li>
               <li><a href="#"></a>Para profesionales</li>
               <li><a href="#"></a>Para empresas</li>
               <li><a href="#"> <img src="/src/assets/icons/globe-svgrepo-com.svg" alt="Español" className='image'/>Español</a></li>
               <li><a href="#"></a><img src="/src/assets/icons/bell-alt-svgrepo-com.svg" alt="campana" className='image' /></li>
               <div className="user flex">
                   <li><a href="#"></a><img src="/src/assets/icons/people04.svg" alt="usario"  className='image' />   
                   </li>
                   <div>
                       <h4>Name</h4>
                       <p className='points'><span></span>5400</p>
                   </div>
               </div>
               
           </ul>
       </div>
    </div>
  )
}

export default Navbar