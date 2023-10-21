import photo from "../images/portrait.png";
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
            <section className="hidden" id="intro">
                <img src={photo} className="portrait" alt="pic"/>
                <section id="intro-desc">
                    <div className="container">
                        <Typewriter 
                            onInit={(Typewriter) => {
                                Typewriter.typeString("Hi, I'm Michael.")
                                .start();
                            }}     
                        />
                    </div>
                    <p className="hidden">I'm a recent Informatics graduate seeking roles in UX/UI and Front-End Development!</p>
                    <p className="hidden">items 2</p>
                    <p className="hidden">item 3</p>
                </section>
            </section>
        </body>
    </>
    );
}

export default Home;