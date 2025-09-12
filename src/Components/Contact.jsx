import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_784px1f',
            'template_5w721ac',
            form.current,
            'MF-SmncmT6HatFDNH'
        ).then(
            (result) => {
                console.log("Email successfully sent!", result.text);
                alert("Email sent!");
                form.current.reset();
            },
            (error) => {
                console.error("There was an error:", error.text);
                alert("Failed to send email!");
            }
        );
    };

    return (
        <div id="contact_section">
            <h1>Contact Information</h1>
            
            <a href="https://www.linkedin.com/in/evelyn-sun-845642296/" target="_blank" rel="noopener noreferrer">
                <button id="linkedin">LinkedIn</button>
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                <button id="github">Github</button>
            </a>
            <a href="https://www.instagram.com/sovelynsun?igsh=MXM2ZWx0Y3JrNmJmeA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <button id="instagram">Instagram</button>
            </a>
        
            <hr id="line"/>
            <div id="email_setup">
                <div id="email_header">
                    <h1>Email Me</h1>
                </div>
            </div>
            <form id="contact_form" ref={form} onSubmit={sendEmail}>
                <input name="first_name" type="text" placeholder="Enter your full name" required />
                <input name="last_name" type="text" placeholder="Enter your email" required />
                <textarea name="message" placeholder="Enter your message" required />
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
