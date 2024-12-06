import './App.css'
import { Outlet } from 'react-router-dom'


import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Footer from './components/Footer'


function App() {


  return (
    <>  
    <div className="main">
      <main>
        < Navbar /> 
        < Accueil />
        < Footer />
      </main>
  
      < Outlet />  
    </div>
    </>
  )
}

export default App