

import React, { useState, useEffect } from 'react';
import './search.css';
import JobCard from '../JobCard';


const Empleos = () => {
  const [empleos, setEmpleos] = useState([]);
  const [empleosFiltrados, setEmpleosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('./empleos.json')
      .then(response => response.json())
      .then(data => {
        setEmpleos(data);
        setEmpleosFiltrados(data);
      })
      .catch(error => {
        console.error('Error al cargar los empleos', error);
      });
  }, []);

  const filtrarEmpleos = () => {
    const cargo = document.getElementById("cargo").value.toLowerCase();
    const ubicacion = document.getElementById("ubicacion").value.toLowerCase();
    const salario = parseInt(document.getElementById("salario").value);

    const empleosFiltrados = empleos.filter(empleo => {
      if (cargo && !empleo.title.toLowerCase().includes(cargo)) {
        return false;
      }
      if (ubicacion && !empleo.location.toLowerCase().includes(ubicacion)) {
        return false;
      }
      if (salario && empleo.salary !== "Confidencial" && parseInt(empleo.salary) < salario) {
        return false;
      }
      return true;
    });

    setEmpleosFiltrados(empleosFiltrados);
  }

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
    filtrarEmpleos()
  }



  return (
    <div>
      <div className='search-container'>
      
        <input className="searchbar" type="text" value={busqueda} onChange={handleBusquedaChange} placeholder="Busca por cargo, salario, ubicación o empresa" />
        
        
        <div>
        
          <select id="area" onChange={handleBusquedaChange}>
            <option value="">Área</option>
            { }
          </select>
          <select id="cargo" onChange={handleBusquedaChange}>
            <option value="">Cargo</option>
            {empleos.map(empleo => (
              <option key={empleo.id} value={empleo.title}>{empleo.title}</option>
            ))}
          </select>
          <select id="ubicacion" onChange={handleBusquedaChange}>
            <option value="">Ubicación</option>
            {empleos.map(empleo => (
              <option key={empleo.id} value={empleo.location}>{empleo.location}</option>
            ))}
          </select>
          <select id="salario" onChange={handleBusquedaChange}>
            <option value="">Salario</option>
            <option value="0">$0</option>
            <option value="1000">$1000</option>
            <option value="2000">$2000</option>

          </select>
          {/* <button onClick={filtrarEmpleos}>Filtrar</button> */}
        </div>
      </div>

      <ul>
        {empleosFiltrados.length === 0 ? (
          <li>No se encontraron empleos</li>
        ) : (
          empleosFiltrados
            .filter(empleos => empleos.title.toLowerCase().includes(busqueda.toLowerCase()))
            .map((empleo) => (
              <JobCard key={empleo.id} companyInfo={empleo}/>
            ))
        )}
      </ul>
    </div>
  );
}

export default Empleos;