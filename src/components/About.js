import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

const About = () => {


    return (
        <div >
            <h1>
                About Me
            </h1>
            <div className="about-me-content">
                <p>I love to learn.  If I learnt something new today, it's a successful day. I also love to build things.
                To me the process of building something new is more important then the end result.</p>
            </div>
            <div>
                <BrowserRouter>
                    <Link to={{ pathname: "https://github.com/ptkn2001" }} target="_blank" >My Github</Link>
                </BrowserRouter>
            </div>
        </div>
    );
  };
  
  export default About;