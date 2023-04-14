import React from 'react';
import { Image } from 'antd';
import "../styles/projects.css";
import html from "../media/html5.svg";
import css from "../media/css3.svg";
import js from "../media/js.png";
import bootstrap from "../media/bootstrap.webp";
import react from "../media/react.svg";
import todo from "../media/projects/todoList.png";
import omni from "../media/projects/omni.png";
import pickbazar from "../media/projects/pick.png";
import ogami from "../media/projects/ogami.png";
import martfury from "../media/projects/martfury.png";
import weather from "../media/projects/weatherapp.png";
import portfolio from "../media/projects/portfolio.png";
import mealfinder from "../media/projects/mealfinder.png";
import startBootstrap from "../media/projects/startbootstrap.png";



const Projects = () => {


    return (
        <div className='project-container'>
            <h1>PROJECTS</h1>
            <div>
                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={portfolio} />
                    </Image.PreviewGroup>
                    <h2>Portfolio</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                        <img className='skill-list' src={react} />
                    </div>
                    <span>
                        <a href=''><button className='project-btn'>Project</button></a>
                        <a href=''><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>


                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={todo} />
                    </Image.PreviewGroup>
                    <h2>TodoList</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                        <img className='skill-list' src={react} />
                    </div>
                    <span>
                        <a href=''><button className='project-btn'>Project</button></a>
                        <a href=''><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>

                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={martfury} />
                    </Image.PreviewGroup>
                    <h2>MartFury | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                        <img className='skill-list' src={react} />
                    </div>
                    <span>
                        <a href=''><button className='project-btn'>Project</button></a>
                        <a href=''><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>


                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={omni} />
                    </Image.PreviewGroup>
                    <h2>OmniFoods | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                    </div>
                    <span>
                        <a target='blank' href='https://kumarsai-omni-clone.netlify.app/'><button className='project-btn'>Project</button></a>
                        <a target='blank' href='https://github.com/KumarSaiPediredla/OmniFoods'><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>

                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={pickbazar} />
                    </Image.PreviewGroup>
                    <h2>PickBazar | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={bootstrap} />
                    </div>
                    <span>
                        <a target='blank' href='https://kumarsai-pickbazar-clone.netlify.app/'><button className='project-btn'>Project</button></a>
                        <a target='blank' href='https://github.com/KumarSaiPediredla/PickBazar'><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>


                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={ogami} />
                    </Image.PreviewGroup>
                    <h2>Ogami | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                    </div>
                    <span>
                        <a href=''><button className='project-btn'>Project</button></a>
                        <a href=''><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>

                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={mealfinder} />
                    </Image.PreviewGroup>
                    <h2>Meal Finder | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                    </div>
                    <span>
                        <a target='blank' href='https://kumarsai-mealfinder-clone.netlify.app/'><button className='project-btn'>Project</button></a>
                        <a target='blank' href='https://github.com/KumarSaiPediredla/Meal-Finder'><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>


                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={weather} />
                    </Image.PreviewGroup>
                    <h2>Weather App | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                        <img className='skill-list' src={js} />
                    </div>
                    <span>
                        <a target='blank' href='https://kumarsai-weatherapp-clone.netlify.app/'><button className='project-btn'>Project</button></a>
                        <a target='blank' href='https://github.com/KumarSaiPediredla/Weather-App'><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>

                <aside>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={320.5} src={startBootstrap} />
                    </Image.PreviewGroup>
                    <h2>Start Bootstrap | Clone</h2>
                    <div>
                        <img className='skill-list' src={html} />
                        <img className='skill-list' src={css} />
                    </div>
                    <span>
                        <a target='blank' href='https://kumarsai-startbootstrap-clone.netlify.app/'><button className='project-btn'>Project</button></a>
                        <a target='blank' href='https://github.com/KumarSaiPediredla/Start-Bootstrap'><button className='git-btn'>GitHub</button></a>
                    </span>
                </aside>
            </div>
        </div>
    )
}

export default Projects;