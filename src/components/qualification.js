import React from 'react';
import "../styles/qualification.css";
import viet from "../media/viet.png";
import diploma from "../media/diploma.png";
import ssc from "../media/ssc.png";

const Qualification = () => {
    return (

        <div className='qualification-container'>
            <h1>Qualification</h1>
            <div>
                <article>
                    <img src={viet} />
                    <h4>Visakha Institute of Engineering and Technology</h4>
                    <h5>Mechanical</h5>
                    <h5>JNTUK</h5>
                    <h5>June(2016)-February(2020)</h5>
                    <h5>Secured : 62.77%</h5>
                </article>

                <article>
                    <img src={diploma} />
                    <h4>Sankethika Polytechnic College</h4>
                    <h5>Mechanical</h5>
                    <h5>SBTET</h5>
                    <h5>July(2013)-March(2016)</h5>
                    <h5>Secured : 71.14%</h5>
                </article>

                <article>
                    <img src={ssc} />
                    <h4>Sri Chaitanya Techno School</h4>
                    <h5>10<sup>th</sup></h5>
                    <h5>STATE BOARD</h5>
                    <h5>June(2012)-April(2013)</h5>
                    <h5>Secured : 8.5 CGPA</h5>
                </article>

            </div>
        </div>
    )
}

export default Qualification;