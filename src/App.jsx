
import Banner from './Components/Banner.jsx'
import Home from './Components/Home.jsx'
import Projects from './Components/Projects.jsx'
import Experiences from './Components/Experiences.jsx'
import Languages from './Components/Languages.jsx'
import Contact from './Components/Contact.jsx'
import Resume from './Components/Resume.jsx'
import './App.css'
import {useState} from 'react'


function App() {
  const [view, setView] = useState("home");
  let mainContent;


  switch(view){
    case "home":
      mainContent=(
        <Home/>
      );
    break;
    case "projects":
      mainContent=(
        <Projects/>
      );
    break;
    case "experiences":
      mainContent=(
        <Experiences></Experiences>
      );
    break;
    case "languages":
      console.log("languages")
      mainContent=(
        <Languages></Languages>
      );
    break;
    case "resume":
      console.log("languages")
      mainContent=(
       <Resume></Resume>
      );
    break;
    case "contact":
      mainContent=(
        <Contact> </Contact>
      );
    break;
    default:
      mainContent=(
       <Home></Home>
      );
    
  }

  return (
    <div id="main">
      <Banner setView={setView}/>
      {mainContent}
    </div>
     
  )
}

export default App
