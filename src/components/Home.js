import photo from "../images/portrait edit3.png";
import './styles/home.css';
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden'); // Use querySelectorAll to select multiple elements
        hiddenElements.forEach((el) => observer.observe(el));
    }, [])
    return (
    <>
        <body>
            <section id="header">
                <section className="hidden" id="intro-text">
                    <Typewriter 
                        onInit={(Typewriter) => {
                            Typewriter.typeString("")
                            .pauseFor(1000)
                            .changeDelay(70)
                            Typewriter.typeString("Hi, I'm Michael.")
                            .start()
                        }}     
                    />
                    <p className="hidden">University of Washington graduate with a degree in <strong>Human-Computer Interaction.</strong></p>
                    <p className="hidden">Currently in the <strong>Greater Seattle Area</strong>, eager to explore UX/UI and Front-End Development opportunities.</p>
                    <p className="hidden">Dedicated to enhancing skills for intuitive <strong>mobile and web application</strong> solutions in diverse environments.</p>
                    <p className="hidden"><a href="#/contact" id="contact-link"><strong>Feel free to reach me!</strong></a>
                        <br />
                        <div id="icons"><a href="https://www.linkedin.com/in/michael-gov/"><BsLinkedin /></a><a href="https://github.com/michaelgov"><BsGithub /></a></div>
                    </p>
                </section>
                <div className="image-container">
                    <img src={photo} className="hidden" id="portrait" alt="pic"/>
                </div>
            </section>
        </body>
    </>
    );
}

export default Home;