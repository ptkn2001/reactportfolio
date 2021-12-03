import React from 'react';

const Home = () => {

    const projects = [
    {
        title: 'Find My Plate',
        tech:   'html, css, javascript',
        appLink: 'https://dkn-findmyplate.herokuapp.com/'
    },
    {
        title: 'Bulletin',
        tech:   'node.js, express, mysql, sequilize, handlebars',
        appLink: 'https://dkn-ems.herokuapp.com/'
    },
    {
        title: 'Expense Management System',
        tech:   'node.js, express, mongo db, graphql, appolo server, react',
        appLink: 'https://project-ems.herokuapp.com/'
    }
    ]

    const handleOnClick = (event) => {
        window.open(event.target.id,"_blank");
    }

    return (
        <div >
            <h1 className="heading">
                My Work
            </h1>
            <div className="content flex-column col-5">
                {projects.map((project) => (
                    <div className="card">
                        <div className="card-header" onClick={handleOnClick}>
                            <h2 id={project.appLink}  >{project.title}</h2>
                        </div>
                        <div className="card-body">
                            <p>{project.tech}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default Home;