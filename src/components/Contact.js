import './styles/contact.css';
import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Contact() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-ico');

        hiddenElements.forEach((el) => {
            el.classList.remove('show-ico');
            void el.offsetWidth;
            el.classList.add('show-ico');
        });

        return () => {
            hiddenElements.forEach((el) => {
                el.classList.remove('show-ico');
            });
        };
    }, []); 
    return (
    <>
        <body>
            <div id="email">
                <a href="mailto:michcgov@gmail.com">
                    <Typewriter 
                            onInit={(Typewriter) => {
                                Typewriter.typeString("michcgov@gmail.com")
                                .start()
                            }}     
                    />
                </a>
                    <br />
                <div className="hidden-ico" id="icon">
                    <a href="https://www.linkedin.com/in/michael-gov/"><BsLinkedin /></a>
                    <a href="https://github.com/michaelgov"><BsGithub /></a>
                </div>
                <div className="hidden-ico">
                    <p>Copyright © Michael Gov</p>
                </div>
            </div>
        </body>
    </>
    );
}

export default Contact;