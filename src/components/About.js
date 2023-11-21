import './styles/about.css';
import photo from "../images/portrait edit3.png";
import event from "../images/event.png";
import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-state');

        hiddenElements.forEach((el) => {
            el.classList.remove('show-state');
            void el.offsetWidth;
            el.classList.add('show-state');
        });

        return () => {
            hiddenElements.forEach((el) => {
                el.classList.remove('show-state');
            });
        };
    }, []); 
    return (
    <>
        <body>
            <div className='about'>
                <section className="hidden-state">
                    <h1 className='hello'>Hello, I'm Michael Gov!</h1>
                    <div className="statement">
                        <div className='begin' id="about-one">
                            <p className="hidden-state">
                                <strong>Born and raised in the Pacific Northwest by two resilient Cambodian parents</strong>,
                                I've always cherished the unwavering commitment they've shown in providing their children
                                with opportunities beyond what they themselves had in rural Cambodia.
                            </p>
                            <p className="hidden-state">
                                Today, I am a proud graduate of the <strong>University of Washington with a Bachelor's degree in Informatics</strong>.
                            </p>
                            <p className="hidden-state">
                                Specializing in <strong>Human-Computer Interaction (HCI)</strong>, my passion lies at the intersection of 
                                <em> design and technology,</em> and I am dedicated to developing seamless and pleasing digital experiences.
                            </p>
                            <p className="hidden-state">
                                With a versatile skill set spanning from <em>user research, prototyping, front-end development, and more,</em> I am eager to <strong>embrace new challenges,
                                exceed user expectations, and continuously learn</strong> as I embark on my career path.
                            </p>
                        </div>
                        <img src={photo} className="port" id="about-port" alt="pic"/>
                    </div>
                </section>
                <section className="hidden-state">
                    <div className="statement">
                        <img src={event} className="port" alt="event"/>
                        <div className='begin'>
                            <p className="hidden-state">
                                Beyond my professional pursuits, I'm also <strong>deeply passionate about PC gaming</strong>, and play titles such as Valorant and League of Legends.
                            </p>
                            <p className="hidden-state">
                            In 2021, amidst the Covid-19 pandemic, I took on the role of <em>Club President</em> for the Gaming Association @ UW: Valorant. 
                            Through my leadership, the community flourished, <strong>gaining over 1,000 new members</strong> through organized events, online tournaments, and collaborations with major gaming brands.
                            </p>
                            <p className="hidden-state">
                                In addition, I have a <em>passion for cooking</em> and enjoy listening to a mix of <em>Rap and R&B music. </em> 
                                Japanese cuisine holds a special place in my heart, and you can often find me tuned in to artists like Childish Gambino, Frank Ocean, and Joji!
                            </p>
                            <p className="hidden-state">
                                Thank you for getting to know a bit about me! Whether you're a startup aiming to make a splash or a brand seeking 
                                a design refresh, <strong>I'm excited to bring my creativity and expertise to the table!</strong>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    </>
    );
}

export default About;