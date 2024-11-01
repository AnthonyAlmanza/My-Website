import React, {useEffect} from 'react';
import {WebsiteName} from "../config/config.ts";
import './resume.css';

const pageName = "Resume";
const resumeSource = "https://anthonyalmanza.github.io/My-Resume/AnthonyAlmanza_Resume.pdf";

const ResumePage: React.FC = () => {
    useEffect(() => {
        document.title = WebsiteName + " | " +pageName;
    })

    return (
        <div className="navbar-buffer">
            <iframe className="resume-iframe" src={resumeSource}>
            </iframe>
        </div>
    );
};

export default ResumePage;