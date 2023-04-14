import React, { useState } from 'react';
import "../styles/contactForm.css";
import TextField from '@mui/material/TextField';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
        setName("");
        setEmail("");
        setMessage("");
    };

    return (


        <form onSubmit={(e) => handleSubmit(e)} className='form'>

            <div className='form-textfields'>
                <TextField placeholder='Enter Your Name' type='text' value={name} required onChange={(event) => setName(event.target.value)} id="standard-basic"  variant="standard" />
                <TextField placeholder='Enter Your Email' type='email' value={email} required onChange={(event) => setEmail(event.target.value)} id="standard-basic"  variant="standard" />


                <textarea
                    className='form-textarea'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    placeholder='Enter your Message here...'
                />

                <button className='form-button' type="submit">Send</button>
            </div>

        </form>
    );
}

export default Form;
