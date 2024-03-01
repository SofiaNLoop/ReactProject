import dayjs from 'dayjs'
import React from 'react'

function JobCard() {

    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff("2024-02-28", 'day');
    const jobDetails = ["Genuine Digital School", "Remoto - Cualquier lugar", "Confidencial","2 vacantes", `${diffInDays} days ago`];
    const iconPath = ["building01.svg", "location02.svg", "money03.svg", "people04.svg", "calendar05.svg"]

    const skills = ["Javascript", "React", "NodeJs"]
  return (
        <div className='mx-screen mb-10 cardP'>
            <div className='flex justify-between items-center px-6 py-4 bg-light rounded-md border border-gray hover:shadow-custom hover:scale-103'>
                <div className='w-36 mr-10'>
                    <img className='max-w-sm' src="src\assets\images\gnuine.png" alt="" />
                </div>
                <div className='flex flex-col w-screen gap-4'>
                    <div className='flex'>
                        <div className='mr-5'>
                            <h1 className='text-gray-700 font-bold text-lg'>Coordinador de Tecnología Educativa</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            {skills.map((skill) => (
                                <p key={skill} className='text-gray-700 text-xs py-0.4 px-2 rounded-xl border border-black'>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between'>
                     {jobDetails.map((detail, index) => (
                          <div key={index} className="flex items-center">
                              <img className="mr-2 w-4" src={`src/assets/icons/${iconPath[index]}`} alt="icon" />
                              <p className='text-sm'>{detail}</p>
                          </div>
                      ))}
                 
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default JobCard