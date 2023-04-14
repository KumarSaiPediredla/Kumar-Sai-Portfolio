import React from "react";
import "../styles/contact.css";
import call from "../media/phone.jpg";
import mail from "../media/mail.png";
import gitHub from "../media/GitHub-Mark.png";
import linkedin from "../media/linkedIn.png";
import Form from "../form/contactForm";

function Contacts() {


    return (
        <div className="contact-container">

            <h1>CONTACTS</h1>
            <p>Problem solver and aspiring Front-End Web Developer. Want to start career in a reputed software company where everyday there will be a learning experience.</p>
            <div className="contact-details-container">
                <img className='contact-details' src={call} />
                <img className='contact-details' src={mail} />
                <img className='contact-details' src={gitHub} />
                <img className='contact-details' src={linkedin} />
            </div>
            <div className="contact-form">
                <Form />
            </div>
        </div>
    )
}

export default Contacts;