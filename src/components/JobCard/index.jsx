import React, { useState } from 'react';
import dayjs from 'dayjs'; // Import dayjs library
import output from '../../jobData.js';

function JobCard() {
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(7);

    const maximo = output.length / porPagina;

    console.log(maximo);

    const date1 = dayjs(Date.now());
    const skills = ["Javascript", "React", "NodeJs"];

    return (
        <div className='flex'>
            {/* Sidebar Component */}
            <div className='w-80 px-4 py-8 bg-gray-200 '>
                <div>
                        <div>
                             <img src="/src/assets/icons/suitcase1-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4 ' />
                        </div>
                        <p className='text-sm mb-4'>Empleos</p>
                        <div>
                             <img src="/src/assets/icons/check-file-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4'  />
                        </div>
                        <p className='text-sm mb-4'>Postulaciones</p>
                        <div>
                             <img src="/src/assets/icons/game-controller-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4' />
                        </div>
                        <p className='text-sm mb-4'>Codex</p>
                        <div>
                             <img src="/src/assets/icons/message-circle-dots-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4' />
                        </div>
                        <p className='text-sm mb-4'>Preguntas</p>
                        <div>
                             <img src="/src/assets/icons/globe-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4' />
                        </div>
                        <p className='text-sm mb-4'>Bootcamp</p>
                        <div>
                             <img src="/src/assets/icons/diamond-svgrepo-com.svg" alt="suitcase" className='w-8 ml-4' />
                        </div>
                        <p className='text-sm mb-4'>Premios</p>
                        <div>
                             <img src="/src/assets/icons/people04.svg" alt="suitcase" className='w-8 ml-4' />
                        </div>
                        <p className='text-sm'>Tu Cv</p>
                </div>
               
            </div>
            {/* Job Cards */}
            <div className='flex-1 ml-4' style={{ width: '1231px' }}>
                {output.map((company) => (
                    <div key={company} className='flex justify-between items-center mb-5 px-6 py-4 bg-light rounded-md border border-gray hover:shadow-custom hover:scale-103' style={{ width: '1231px' }}>
                        <div className='w-36 mr-10'>
                            <img className='max-w-sm' src="src\assets\images\gnuine.png" alt="" />
                        </div>
                        <div className='flex flex-col w-screen gap-4'>
                            <div className='flex'>
                                <div className='mr-5'>
                                    <h1 className='text-gray-700 font-bold text-lg'>{company.title}</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    {skills.map((skill) => (
                                        <p key={skill} className='text-gray-700 text-xs py-0.4 px-2 rounded-xl border border-black'>{skill}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/building01.svg" alt="icon" />
                                    <p className='text-sm'>{company.company}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/location02.svg" alt="icon" />
                                    <p className='text-sm'>{company.location}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/money03.svg" alt="icon" />
                                    <p className='text-sm'>{company.salary}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/people04.svg" alt="icon" />
                                    <p className='text-sm'>{company.vacancies}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/calendar05.svg" alt="icon" />
                                    <p className='text-sm'>{date1.diff(`${company.time_from_published.split('T')[0]}`, 'day') + ' days ago'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobCard;

