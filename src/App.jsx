import Navbar from "./components/NavBar"
import Jobcard from "./components/JobCard"
import SearchBar from "./components/SearchBar"
import jobData from "./jobData"

function App() {
  

  return (
        <div>
            < Navbar/>
            < SearchBar/>
            {jobData.map((job)=>{
              <Jobcard key= {job.title} {...job}/>
            })}
            < Jobcard/>
        </div>
  )
}

export default App
