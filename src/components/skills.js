import React from 'react';
import "../styles/skills.css";
import html from "../media/html5.svg";
import css from "../media/css3.svg";
import js from "../media/js.png";
import react from "../media/react.svg";
import redux from "../media/redux.svg";
import bootstrap from "../media/bootstrap.webp";


const Skills = () => {


    return (

        <div className='skills-container'>
            <h1>SKILLS</h1>
            <div className='skills-items'>
                <div>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={html} />
                        </div>
                        <h4>HTML5</h4>
                    </span>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={css} />
                        </div>
                        <h4>CSS3</h4>
                    </span>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={js} />
                        </div>
                        <h4>JAVA SCRIPT</h4>
                    </span>
                </div>
                <div>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={react} />
                        </div>
                        <h4>REACT</h4>
                    </span>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={redux} />
                        </div>
                        <h4>REDUX</h4>
                    </span>
                    <span className='skills-sub-container'>
                        <div>
                            <img className='skills-list' src={bootstrap} />
                        </div>
                        <h4>BOOTSTRAP</h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills;