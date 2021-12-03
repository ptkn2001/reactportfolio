import React from 'react';
import Home from './Home';
import About from './About';


const Main = (props) => {

  switch (props.activePage) {
    case "My Work":
      return (
        <div>
          <Home/>
        </div>
      );
    case "About Me":
      return (
        <div>
          <About />
        </div>
      );
    default:
      return null;
  }
};

export default Main;