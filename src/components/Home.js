import photo from "../images/portrait edit3.jpg";
import './styles/home.css';
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Home() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden');

        hiddenElements.forEach((el) => {
            el.classList.remove('show');
            void el.offsetWidth;
            el.classList.add('show');
        });

        return () => {
            hiddenElements.forEach((el) => {
                el.classList.remove('show');
            });
        };
    }, []); 
    return (
    <>
        <section id="header">
            <section className="hidden" id="intro-text">
                <Typewriter 
                    onInit={(Typewriter) => {
                        Typewriter.typeString("")
                        .pauseFor(1000)
                        .changeDelay(70)
                        Typewriter.typeString("Hi, I'm Michael!")
                        .start()
                    }}     
                />
                <p className="hidden">University of Washington graduate in <strong>Human-Computer Interaction,</strong> <br />currently pursuing a Master of Science in Information Management (MSIM) at UW.</p>
                <p className="hidden">Based in the <strong>Greater Seattle Area</strong> and passionate about UX/UI and product design.</p>
                <p className="hidden">Focused on building intuitive mobile and web experiences that make a real impact!</p>
                <p className="hidden"><a href="#/contact" id="contact-link"><strong>Feel free to reach me!</strong></a>
                    <br />
                    <span id="icons"><a href="https://www.linkedin.com/in/michael-gov/"><BsLinkedin /></a><a href="https://github.com/michaelgov"><BsGithub /></a></span>
                </p>
            </section>
            <div className="image-container">
                <img src={photo} className="hidden" id="portrait" alt="pic"/>
            </div>
        </section>
    </>
    );
}

export default Home;