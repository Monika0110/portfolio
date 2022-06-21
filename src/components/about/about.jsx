import React from 'react'
import "./about.css"
import Skill from '../skill/skill'
import {skills} from '../../dataskill'
import aboutpic from '../../img/aboutpic.jpg'
const About = () => {
    return (
        <div className="a" id='about'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img className='a-img' src={aboutpic} alt=''/>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <p className='a-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur nesciunt aut eius harum, quod sed minima consectetur praesentium 
                repudiandae sequi. Inventore, deserunt ducimus explicabo iste vero quasi fugiat iusto optio provident architecto nam eum vitae molestias esse dolores atque ab!
                </p>
                
                <div className='a-right-img'>
                {skills.map((item)=>(
                    <Skill key={item.id} img={item.img} />
                ))}
                </div>
                
                </div>
            </div>
    )
}

export default About
