import React, {useEffect} from 'react';
import {WebsiteName} from "../config/config.ts";
import './notfound.css'

const pageName = "Page Not Found";

const NotFoundPage: React.FC = () => {
    useEffect(() => {
        document.title = WebsiteName + " | " +pageName;
    })
    return (
        <div className="notfound-container">
            <p className="header-medium">
                404 - You found a dead end!
                <br/>
                <a className="underline-animation" href="https://anthonyalmanza.com">Go back home</a>
            </p>
        </div>
    );
};

export default NotFoundPage;