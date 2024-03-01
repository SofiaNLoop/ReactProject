import React from 'react'

function SearchBar() {
  return (
    <div className='header flex gap-10 my-4 justify-center '>
        <div className="search-bar">
              <input type="text" className='look-for-job py-5' placeholder="Busca por cargo, salario, ubicación o empresa"/>

        </div>
        <div className="details-job ">
            <select className='w-20 py-2 pl-4  font-semibold rounded-md'>
                <option value="" disabled hidden selected>Area</option>
                <option value="Comercio Exterior">Comercio Exterior</option>
            </select>
            <select className='w-20 py-2 pl-4  font-semibold rounded-md'>
                <option value="" disabled hidden selected>Cargo</option>
                <option value="Full Stack">Full Stack</option>
            </select>
            <select className='w-20 py-2 pl-4  font-semibold rounded-md'>
                <option value="" disabled hidden selected>Salario</option>
                <option value="USD">USD</option>
            </select>
            <select className='w-20 py-2 pl-4  font-semibold rounded-md'>
                <option value="" disabled hidden selected>Ubicación</option>
                <option value="Medellin">Medellin</option>
            </select>

        </div>
    </div>
  )
}

export default SearchBar