import photo from "../images/portrait edit3.png";
import './styles/home.css';
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

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
                    <p className="hidden">I'm a recent graduate from the <strong>University of Washington </strong> 
                    with a degree in <i>Human-Computer Interaction!</i></p>
                    <p className="hidden">I currently reside in the <strong>Greater Seattle Area,</strong> and enthusiastic in diving into the world of <i>UX/UI and Front-End Development</i> here in the Pacific Northwest!</p>
                    <p className="hidden">Through my experiences in developing <strong>both mobile and web applications</strong>, I'm dedicated to pushing my limits and honing my skills to create
                    <strong> intuitive</strong> and <strong>useful solutions</strong> through continuous learning in new environments. </p>
                    <p className="hidden"><a href="#/contact" id="contact-link"><strong>Feel free to reach me!</strong></a></p>
                </section>
                <img src={photo} className="hidden" id="portrait" alt="pic"/>
            </section>
        </body>
    </>
    );
}

export default Home;