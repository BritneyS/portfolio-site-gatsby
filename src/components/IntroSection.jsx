import React from "react";
import copy from "../utils/copy";
import { FiChevronsDown } from "react-icons/fi"

import "../assets/css/intro-section.css";

const {
    waveEmoji,
    greeting,
    introduction,
    subHeadingOne,
    subHeadingTwo,
    scrollMessage
} = copy.Intro;

const IntroSection = () => {
    return (
        <section id="intro" className="intro-container">
            <h1 className="intro-heading">
                <span role="img" aria-label="wave">{waveEmoji}</span>
                {greeting}
                <br />
                {introduction}
            </h1>
            <h2 className="intro-subheader">
                {subHeadingOne}
                <br />
                <br />
                {subHeadingTwo}
            </h2>
            <div className="chevron-down-container">
                <FiChevronsDown />
            </div>
            <p className="scroll-message">
                {scrollMessage}
            </p>
        </section>
    );
}

export default IntroSection;