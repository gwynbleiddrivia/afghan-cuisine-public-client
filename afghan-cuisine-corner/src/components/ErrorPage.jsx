import React from 'react'
import { Link } from "react-router-dom"

const ErrorPage = () => {
        return (
                <div className="flex flex-col items-center gap-8">
                        <h1 className="text-7xl">404 error</h1>
                        <h1 className="text-2xl">Oops!! You seem to be lost</h1>
                        <img src="http://lh5.ggpht.com/_9F9_RUESS2E/SpV5Yi8Vv5I/AAAAAAAAA4E/W9-J8eMLokM/s800/50-Cool-and-Creative-404-Error-Pages-25.jpg" className="w-fit"/>
                        <p>Let's take you to
			<Link to="/home" className="ml-2 mr-2 btn btn-success">Home</Link>
			where perhaps I did not eat anything yet</p>
                </div>
        );
};

export default ErrorPage;
