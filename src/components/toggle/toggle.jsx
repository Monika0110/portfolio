import './toggle.css'
import Sun from '../../img/sun.png';
import moon from '../../img/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"});
    }
    return (
        <div className="t">
            <img src={Sun} alt='' className='t-icon'/>
            <img src={moon} alt='' className='t-icon'/>
            <div className='t-button' onClick={handleClick} 
            style={{left:darkMode?0:25}}></div>
        </div>
    )
}

export default Toggle
