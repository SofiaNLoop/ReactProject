import Navbar from "./components/NavBar"


import SearchBar from './components/SearchBar'
import SideBar from "./components/SideBar"

function App() {
  

  return (
        <div > 
          <div>
            <Navbar/>
          </div>
          <div>
          </div>
            {/* <JobCard/> */}
          <div className="flex flex-row w-full">
            <SideBar/>
            <SearchBar/>
          </div>
        </div>
  )
}

export default App
