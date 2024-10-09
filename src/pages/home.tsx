import React, {useEffect} from 'react';
import { WebsiteName } from "../config/config.ts";
import GithubImage from '../assets/github-mark-white.svg';

const pageName = "Home";

const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = WebsiteName + " | " +pageName;
    })
    return (
        <div id="home-component">
            <div className="section-wrapper" role="main">
                <section id="welcome" className="grid">
                    <div className="name-text">
                        <h1 className=" header-large no-margin text-white">
                            <span className="overlap">Anthony</span>
                            <span className="overlap text-highlight">Almanza</span>
                        </h1>
                    </div>
                    <div className="about-text">
                        <p className="text-size-med no-margin text-white">
                            I am a software engineer with a passion for games, technology, and problem-solving.
                        </p>
                    </div>
                </section>
                <section id="about">
                    <h1 className="section-header text-white">About me</h1>
                    <p className="text-size-small">
                        My interest in software development began when I was younger, creating simple scripts for an MMO.
                        This passion for programming led me to develop mods for my favorite games,
                        which ultimately inspired me to pursue a degree in Computer Science.
                    </p>
                    <p className="text-size-small">
                        After graduating from college, I eagerly embarked on my career as a software engineer.
                        What started as a hobby, writing scripts to automate in-game actions, has evolved into a fulfilling professional journey.
                        Today, I am a full-stack developer, leveraging my skills to create comprehensive and efficient software solutions.
                    </p>
                </section>
                <section id="experience">
                    <h1 className="section-header text-white">Skills</h1>
                    <div className="text-size-small">
                        <p>
                            I'm always excited to learn about new technologies to add to my skill-set.
                            Throughout my career I've had the opportunity to use some fun technologies to accomplish my goals. These ranging from
                            front-end frameworks to back-end technologies, and all the tooling in-between.
                        </p>
                        <p id="recent-tech">Here are a few of the technologies I've been working with recently:</p>
                        <ul className="list-grid">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                </section>
                <section id="work">
                    <h1 className="section-header text-white">Work History</h1>
                    <div className="text-size-med">
                        <p>
                            <span className="bold text-white">Software Engineer - Microsoft </span>
                            <span className="italic">(March 2022 - March 2024)</span>
                        </p>
                        <ul className="text-size-small">
                            <li>Worked on a multiplatform Unity application compatible with Meta Quest, Windows, and WebGL.</li>
                            <li>Focused on automation of testing and optimization processes, utilizing PowerShell and Azure Pipelines.</li>
                        </ul>
                        <p>
                            <span className="bold text-white">Software Engineer - Fisher Investments </span>
                            <span className="italic">(July 2021 - March 2022)</span>
                        </p>
                        <ul className="text-size-small">
                            <li>Built multiple back-end services in .NET utilizing RabbitMQ to automate various tasks.</li>
                            <li>Created deployment plans for back-end services using TeamCity and Octopus Deploy.</li>
                        </ul>
                        <p>
                            <span className="bold text-white">Software Engineer - Charles Schwab </span>
                            <span className="italic">(July 2018 - July 2021)</span>
                        </p>
                        <ul className="text-size-small">
                            <li>Worked with a variety languages to create a full end to end application utilizing multiple RESTful web services
                                built in C#/.NET, and Angular for the front-end application.</li>
                            <li>Worked cross-functionally with multiple teams in order to create a great user experience for the application.</li>
                            <li>Utilized test-driven development and behavior-driven development in order to help facilitate code quality and maintainability.</li>
                        </ul>
                    </div>
                </section>
                <section id="contact">
                    <h1 className="section-header text-white">Contact Me.</h1>
                    <div className="text-size-small">
                        <p>Want to ask a question, or just say hi? Feel free to contact me on any of the following places.</p>
                        <ul className="link-container">
                            <li><a href="mailto:Anthony.Almanza8@gmail.com" target="_blank">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/MarkAnthonyAlmanzaJr/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com/AnthonyAlmanza" target="_blank">GitHub</a></li>
                            <li><a href="https://twitter.com/AnthonyAlmanza_" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="footer">
                <div>
                    <a href="https://github.com/AnthonyAlmanza/My-Website" target="_blank">
                        <img className="github-image" id="github-svg" src={ GithubImage }/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;