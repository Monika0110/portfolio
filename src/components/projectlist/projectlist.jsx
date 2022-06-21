import './projectlist.css';
import React from 'react';
import Project from "../project/project";
import {projects} from "../../data";

const Projectlist = () => {
    return (
        <div className="pl" id='pjs'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire. It's Monika.</h1>
                <p className='pl-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur nesciunt aut eius harum, quod sed minima consectetur praesentium 
                repudiandae sequi.
                </p>
            </div>
            <div className='pl-list'>
                {projects.map((item)=>(
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default Projectlist
