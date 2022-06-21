import React,{useContext} from "react";
import './education.css';
import {Text} from 'react-native'
import {ThemeContext} from '../../context'
const Education = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="e" id="ed">
        <div className="e-left">
        
        <h1 className="e-title" style={{color:darkMode&&"black"}}>Education</h1>
            
        </div>
        <div className="e-right">
            <div className="e-desc">
                <h2>Malaviya National Institute Of Technology</h2>
                <div className='clg'>B.Tech Metallurgical And Materials Engineering <Text>&#8226;</Text> 2019-present</div>
                <h2>M.B.S.S. Sr.Sec. School</h2>
                <div className="scl">
                    <ul>
                        <li>Class 12 <Text>&#8226;</Text> 2018<li>Grade {'>>'} 91.6%</li></li>
                        <li>Class 10 <Text>&#8226;</Text> 2016<li>Grade {'>>'} 88.9%</li></li>
                    </ul>
                    <div className="brd">Board {'>>'} StateBoard</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Education
