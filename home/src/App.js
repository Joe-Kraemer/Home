import './App.css';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import { useState, useRef } from "react"
function App() {
  const menus = [
    "About",
    "Education",
    "Projects",
    "Contact"
  ]
  const contents = [
    About,
    Education,
    Projects,
    Contact
  ]
  const [visibleSection, setVisibleSection] = useState(menus[0])
  console.log(visibleSection)
  const headerRef = useRef()
  return (
    <div className="App">
      <Navigation menus={menus} headerRef={headerRef} visibleSection={visibleSection} />
      {
        contents.map((Component, index)=>(
          <Component {... {setVisibleSection,headerRef}} key={index}/>
        ))
      }
    </div>
  );
}

export default App;
