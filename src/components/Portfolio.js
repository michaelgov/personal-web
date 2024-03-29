import './styles/portfolio.css';
import React, { useEffect } from "react";
import { FaFigma } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGlobe } from 'react-icons/bs';
import blossom from "../images/port-logo/blossom.png";
import parktopia from "../images/port-logo/parktopia.png";
import gendergap from "../images/port-logo/gendergap.png";
import lantern from "../images/port-logo/lantern.png";

function Portfolio() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden-port');

        hiddenElements.forEach((el) => {
            el.classList.remove('show-port');
            void el.offsetWidth;
            el.classList.add('show-port');
        });

        return () => {
            hiddenElements.forEach((el) => {
                el.classList.remove('show-port');
            });
        };
    }, []); 
    return (
    <>
        <div className="portfolio">
            <section className="hidden-port">
                <div>
                    <h2>Gender Gap in Gaming</h2>
                    <p>
                        The Gender Gap in Gaming website was <strong>developed</strong> to analyze and provide 
                        resources about the gender gap within the gaming space in the industry and playerbase.
                    </p>
                    <br />
                    <p id="icon">
                        <a href="https://www.figma.com/proto/QNOvq02eR8z00RBLk3DNxQ/Info-Capstone-Team-Pandas-Prototype?type=design&node-id=601-575&scaling=scale-down&page-id=0%3A1&starting-point-node-id=601%3A575" >
                        <FaFigma /></a>
                        <a href="https://michaelgov.github.io/PandaCapstone/public/index.html" >
                        <BsGlobe /></a>
                        <a href="https://docs.google.com/presentation/d/1aV7_c1r8GEM4JZcOkGK5AIZYISmVwJuBKX1nq6-_qqw/edit?usp=sharing" >
                        <IoDocumentTextOutline /></a>
                    </p>
                </div>
                <img className="port-img" src={gendergap} alt="gender-gap-logo"/>
            </section>
            <section className="hidden-port">
                <div>
                    <h2>Parktopia</h2>
                    <p>
                        Parktopia is a website <strong>developed</strong> using data from the City of Seattle to find <em>local parks with specific amenities</em> around the Greater Seattle Area.
                        The website includes an interactive map with filterable plots to find certain parks.
                    </p>
                    <br />
                    <p id="icon">
                        <a href="https://www.figma.com/file/4oEWfWS4BXisI5hSveHOW1/High-fidelity-wireframes?type=design&node-id=0-1&mode=design&t=Vf3eT1U5PAPcNZXT-0" >
                        <FaFigma /></a>
                        <a href="https://sustainable-goat.vercel.app/" >
                        <BsGlobe /></a>
                        <a href="https://app.pitch.com/app/public/player/8df6626a-2b5c-4bf4-baac-cd77d9573fcb" >
                        <IoDocumentTextOutline /></a>
                    </p>
                </div>
                <img className="port-img" src={parktopia} alt="parktopia-logo"/>
            </section>
            <section className="hidden-port">
                <div>
                    <h2>Blossom</h2>
                    <p>
                        Blossom is an app <strong>designed</strong> to help parents overcome the challenges of postpartum.
                        The app includes resources such as <em>videos, articles, and guided activites</em> to accompany parents in caring for a new child.
                    </p>
                    <br />
                    <p id="icon">
                        <a href="https://www.figma.com/proto/0aktdOfXtrie699x9uQqua/Blossom-Hackathon?type=design&node-id=13-5&scaling=scale-down&page-id=0%3A1&starting-point-node-id=13%3A5" >
                        <FaFigma /></a>
                        <a href="https://docs.google.com/presentation/d/1--714Qw9Bv76TBZtjFhH84Ff66u_yqdd2VIgXPUPEFw/edit?usp=sharing" >
                        <IoDocumentTextOutline /></a>
                    </p>
                </div>
                <img className="port-img" src={blossom} alt="blossom-logo"/>
            </section>
            <section className="hidden-port">
                <div>
                    <h2>Lantern</h2>
                    <p>
                        Lantern is an app <strong>designed</strong> to help users find <em>local resources in their area</em> who are struggling to fulfill basic needs
                        such as childcare, housing, food and/or financial assistance.
                    </p>
                    <br />
                    <p id="icon">
                        <a href="https://www.figma.com/file/RNK2PtcDqHux8A8jYAnFeH/Hackathon-2022?type=design&node-id=0-1&mode=design&t=O5yYeTAml9YWVzhc-0" >
                        <FaFigma /></a>
                        <a href="https://docs.google.com/document/d/15ESWsJ-ptJl2_Y3KgAB37a1CToPneatetk0oOYgfSRE/edit?usp=sharing" >
                        <IoDocumentTextOutline /></a>
                    </p>
                </div>
                <img className="port-img" src={lantern} alt="lantern-logo"/>
            </section>
        </div>
    </>
    );
}

export default Portfolio;