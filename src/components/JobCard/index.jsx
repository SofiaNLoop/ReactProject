import React from "react";

function Jobcard(props) {
  const jobDetails = ["Genuine Digital School", "Remoto - Cualquier lugar", "Confidencial","2 vacantes", "2024-02-28"];
  const iconPath = ["building01.svg", "location02.svg", "money03.svg", "people04.svg", "calendar05.svg"]
  //const date1 = dayjs(Date.now());
  // const diffInDays = date1.diff(jobDetails[4].split("T")[0], 'day')
  return (
  <div className='mx-20 mb-4'>
      <div className='flex justify-start items-center px-6 py-4 bg-white-200 rounded-md border  border-blue-500 hover:shadow-lg card'>
          <div>
              <img src="/src/assets/images/acg.png" alt="image" className='job-company-image' />
          </div>
          <div>
              <div className='flex gap-4 my-2'>
                  <h1 className='title-job text-gray-800'>Coordinador Frontend Developer</h1><span className='info'>Power BI </span><span className='info'> Sass </span><span className='info'>English B2</span>
              </div>
              <div className='flex justify-start gap-10'>
                     {jobDetails.map((detail, index) => (
                          <div key={index} className="flex items-center">
                              <img src={`src/assets/icons/${iconPath[index]}`} alt="icon" className="mr-2 icons" />
                              <p>{detail}</p>
                          </div>
                      ))}
                 
              </div>
          </div>
      </div>
  </div>
)
}

export default Jobcard