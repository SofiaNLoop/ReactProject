import React from 'react'


function SideBar() {
  return (

    <div className='w-30 px-4 py-8 bg-light border border-gray'>
              
                      <div className='flex flex-col mb-4 pt-3 items-center gap-2 bg-hover-blue rounded-md shadow-md'>
                            <img src="/src/assets/icons/suitcase1-svgrepo-com.svg" alt="suitcase" className='w-8' />
                            <p className='text-xs mb-4'>Empleos</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/check-file-svgrepo-com.svg" alt="suitcase" className='w-8'  />
                          <p className='text-xs mb-4'>Postulaciones</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/game-controller-svgrepo-com.svg" alt="suitcase" className='w-8' />
                          <p className='text-xs mb-4'>Codex</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/message-circle-dots-svgrepo-com.svg" alt="suitcase" className='w-8' />
                          <p className='text-xs mb-4'>Preguntas</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/book-regular-24.png" alt="suitcase" className='w-8' />
                          <p className='text-xs mb-4'>Bootcamp</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/diamond-svgrepo-com.svg" alt="suitcase" className='w-8' />
                          <p className='text-xs mb-4'>Premios</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150'>
                          <img src="/src/assets/icons/people04.svg" alt="suitcase" className='w-8' />
                          <p className='text-xs'>Tu Cv</p>
                      </div>
              
              
          </div>

  )
}

export default SideBar
 