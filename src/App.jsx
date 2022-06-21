import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projectlist from "./components/projectlist/projectlist";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/toggle";
import Education from "./components/education/education";
import {IconContext} from 'react-icons';
import { useContext } from "react";
import { ThemeContext } from "./context";


const App = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
  <div style={{backgroundColor:darkMode?"#222":"white",color:darkMode && "white",}}>
  <IconContext.Provider value={{size:'2em'}}>
  <Toggle/>
  <Intro/>
  <About/>
  <Education/>
  <Projectlist/>
  <Contact/>
  </IconContext.Provider>
  </div>
  );
};

export default App;