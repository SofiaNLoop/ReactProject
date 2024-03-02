import dayjs from 'dayjs'
import React from 'react'

function JobCard( {companyInfo} ) {

    const date1 = dayjs(Date.now());
    const skills = ["Javascript", "React", "NodeJs"]

    return (
            
            <div className='mx-screen mb-10 cardP'> 
                        
                    <div  className='flex justify-between items-center mb-5 px-6 py-4 bg-light rounded-md border border-gray hover:shadow-custom hover:scale-103'>
                        
                        <div className='w-36 mr-10'>
                            <img className='max-w-sm' src="src\assets\images\gnuine.png" alt="" />
                        </div>
                        <div className='flex flex-col w-screen gap-4'>
                            <div className='flex'>
                                <div className='mr-5'>
                                    <h1 className='text-gray-700 font-bold text-lg'>{companyInfo?.title}</h1>
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
                                    <p className='text-sm'>{companyInfo?.company}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/location02.svg" alt="icon" />
                                    <p className='text-sm'>{companyInfo?.location}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/money03.svg" alt="icon" />
                                    <p className='text-sm'>{companyInfo?.salary}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/people04.svg" alt="icon" />
                                    <p className='text-sm'>{`${companyInfo?.vacancies} Vacante`}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="mr-2 w-4" src="src/assets/icons/calendar05.svg" alt="icon" />
                                    <p className='text-sm'>{date1.diff(`${companyInfo?.time_from_published.split('T')[0]}`, 'day') + ' days ago'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default JobCard