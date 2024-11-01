import React, {useEffect} from 'react';
import {WebsiteName} from "../config/config.ts";
import './resume.css';

const pageName = "Resume";

const ResumePage: React.FC = () => {
    useEffect(() => {
        document.title = WebsiteName + " | " +pageName;
    })

    return (
        <div className="navbar-buffer">
            <iframe className="resume-iframe" src="https://anthonyalmanza.github.io/My-Resume/AnthonyAlmanza_Resume.pdf">
            </iframe>
        </div>
    );
};

export default ResumePage;