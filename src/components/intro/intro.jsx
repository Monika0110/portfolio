import React from 'react'
import "./intro.css"
import me from "../../img/bgimg.jpg"
// import { useContext } from 'react'
// import { ThemeContext } from '../../context'
const Intro = () => {
    
//     const theme=useContext(ThemeContext);
//   const darkMode=theme.state.darkMode;

    return (

        <div className='intro'>
        <div className='intro-bg'>
               <img src= {me}
               alt="" className='intro-img'/>
            </div>
        <div className='navbar'>
            <li><a href="/">Home</a></li>
            <li><a  href="#about">About</a></li>
            <li><a href="#ed">Education</a></li>
            <li><a  href="#pjs">Projects</a></li>
            <li><a href="#cs">Contact</a></li>
        </div>
           <div className='intro-left'>
           
               <div className='intro-left-wrapper'>
               
                   <h2 className='intro-helo'>Hello, My name is </h2>
                   <h1 className='intro-name'>Monika Sarswat</h1>
                   <div className='intro-title'>
                       <div className='intro-title-wrapper'>
                           <div className='intro-title-item'>Web Developer</div>
                           <div className='intro-title-item'>UI/UX Designer</div>
                           <div className='intro-title-item'>Programmer</div>
                           <div className='intro-title-item'>Data Science Enthusiast</div>
                       </div>
                   </div>
                   <p className='intro-desc'>
                       I am a Pre-final year Engineering Student, I have interest in Development and Research fields.
                       I like to learn and explore new things.
                   </p>
               </div>
              
            </div>
            </div>
    )
}

export default Intro
