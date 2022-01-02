import { useEffect, useState } from "react";
import Loading from "./Loading";
import bioImg from "./img/about.jpg";
import "./About.scss";

function About() {
    // get directory where images are located
    const importAllFrom = (dir) => {
        return dir.keys().map(dir);
    }
    
    const personalImgs = importAllFrom(require.context('./img/personal', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="about">
            <div className="about-intro">
                <p> I'm a <span className="important">model, actress, singer, dancer, artist, writer,</span> with 9+ years of experience </p>
            </div>

            <div className="about-bio">
                <div className="about-bio-left">
                    <p>
                        A Harlem born Latina, <span className="important">Nina Rodriguez</span> is a model and actress working predominantly in the NYC area. 
                        She started modeling because she wanted to push a lane for woman like herself. She has worked with incredible artists of all mediums. 
                        Shooting a large range of work, from commercial print, beauty, and editorial work. Nina is breaking barriers getting consistent work 
                        with brands such as Champion, L'Oréal, Samsung, Makeup Forever, and SteadfastMagazine to name a few. When she's not working she's 
                        being creative in other ways, whether it's painting, or writing.
                    </p>
                    <div className="about-bio-left-nums">
                        <p> <span className="important num">45+</span> Clients</p>
                        <p> <span className="important num">100+</span> Projects</p>
                        <p> <span className="important num">25+</span> Collabs</p>
                    </div>
                </div>

                <div className="about-bio-right">
                    <img src={bioImg} alt="Nina Rodriguez" />
                    <div className="about-bio-right-border"></div>
                </div>
            </div>

            <div className="border"></div>

            <div className="about-body">
                {personalImgs.map((img, idx) =>
                    <img key={idx} src={img} alt="personal" loading="lazy" />
                )}
            </div>
        </div>
    );
}

export default About;