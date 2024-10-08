import React, {useEffect} from 'react';
import {WebsiteName} from "../config/config.ts";

const pageName = "Page Not Found";

const NotFoundPage: React.FC = () => {
    useEffect(() => {
        document.title = WebsiteName + " | " +pageName;
    })
    return (
        <div>
            <h1>404 - Not Found</h1>
        </div>
    );
};

export default NotFoundPage;