import React, {useEffect} from 'react';
import {WebsiteName} from "../config/config.ts";
import './notfound.css'
import {Link} from "react-router-dom";

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
                <Link className="underline-animation" to="/">Go back home</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;