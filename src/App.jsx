import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import MainSection from './components/sections/main/mainSection.jsx'
import Preferences from './components/sections/prefs/prefsSection.jsx'
import Services from './components/sections/services/servicesSection.jsx'
import Feedback from './components/sections/feedback/feedback.jsx'
import Footer from './components/footer.jsx'

function App() {
    return (
      <main style={{
        overflowY: "auto",
        scrollSnapType: 'mandatory',
        scrollBehavior: 'smooth',
      }}>
      <Header/>
      <MainSection/>
      <Preferences/>
      <Services/>
      <Feedback/>
      <Footer/>

      {/* <Router>
        <Header />
          <Routes>
            <Route path='/' element={<MainSection/>}/>
            <Route path='/preferences' element={<Preferences/>}/>
            <Route path='/services' element={ <Services/>}/>
            <Route path='/feedback' element={ <Feedback/>}/>
          </Routes>
        </Router> */}
      </main>
    )
}

export default App
