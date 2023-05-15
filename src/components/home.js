import React from 'react';
import "../styles/home.css";
import homeLogo from "../media/home-image.avif";
import call from "../media/phone.jpg";
import mail from "../media/mail.png";
import gitHub from "../media/GitHub-Mark.png";
import linkedin from "../media/linkedIn.png";

const Home = () => {

    const pdf = "http://localhost:3000/My_resume.pdf"

    const downloadResume = () => {
        const atag = document.createElement("a");
        atag.href = pdf;
        const filename = pdf.split("/").pop();
        atag.download = filename;
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }

    return (
        <div className='home-container'>

            <aside>
                <h1>Hi, I'm Kumar Sai</h1>
                <h3>Front-End Developer</h3>
                <p>with a passion for web application
                    development and success that gives a scope to enhance my
                    knowledge and utilizing my skills towards the growth of the
                    organization.
                </p>
                <div>
                    <img className='contact-details' alt='call' src={call} />
                    <img className='contact-details' alt='mail' src={mail} />
                    <img className='contact-details' alt='github' src={gitHub} />
                    <img className='contact-details' alt='linkedin' src={linkedin} />
                </div>


                <button onClick={() => downloadResume()}>Resume</button>

            </aside>

            <section>
                <img className='home-img' alt='logo' src={homeLogo} />
            </section>

        </div >
    )
}

export default Home;