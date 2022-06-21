import './contact.css'
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import {useContext,useState,useRef} from 'react'
import React from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../context'
// import {FaGithub} from 'react-icons/fa'

import SocialFollow from "./social"

const Contact = () => {
    
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const formref = useRef();
    const [done,setDone]= useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_pclejqq', 'template_gyqgzz2', formref.current, "user_J7XiOIgPV4cOx0vC78Go6")
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <div className="c" id='cs'>
            <div className='c-bg'></div>
                <div className='c-wrapper'>
                    <div className='c-left'>
                        <h1 className='c-title'>Contact me</h1>
                        <div className='c-info'>
                            <div className='c-info-item'>
                                <img src={phone} alt='' className='c-icon'/>+91 9352326487
                            </div>
                            <div className='c-info-item'>
                                <img src={email} alt='' className='c-icon'/><a  href="mailto:monikasarswat01@gmail.com" style={{color:!darkMode && "#333"}}>monikasarswat01@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='c-right'>
                        <p className='c-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde cum commodi debitis totam quis, vitae odit rep
                        Libero non in illum magni, suscipit laboriosam recusandae!
                        </p>
                        <form ref={formref} onSubmit={handleSubmit}>
                            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                            <button>Submit</button>
                            {done && "Thank You..."}
                        </form>
                        
                    </div> 
                </div>
                <div className='sn'>
                <SocialFollow/>
                <a className='icons' rel="noreferrer" target="_blank" href="https://github.com/Monika0110">
                <i class='fab fa-github'></i></a>
                    <a className='icons' rel="noreferrer" target="_blank" href="mailto:monikasarswat01@gmail.com">
                    <i class="fas fa-envelope"></i></a>
                    <a className='icons' rel="noreferrer" target="_blank" href="https://twitter.com/MonikaSarswat2">
                    <i class="fab fa-twitter"></i></a>
                    <a className='icons' target="_blank" rel="noreferrer"
                    href="https://www.linkedin.com/in/monika-sarswat-6a6b871b8/">
                    <i class="fab fa-linkedin-in"></i></a>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
                    <p className='nm'>Monika Sarswat</p>
                    </div>
            </div>
    );
};

export default Contact;
