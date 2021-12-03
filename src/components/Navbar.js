import React from 'react';

const Navbar = (props) => {

  const handleClick = (event) => {
    const { innerText } = event.target;
    props.changeActivePage(innerText);
  };

    return (
        <div >
            
                    <ul className="nav">
                        <li className='navItem my-1' onClick={handleClick}>My Work</li>
                        <li className='navItem my-1' onClick={handleClick}>About Me</li>
                    </ul>
        </div>
    );
  };
  
  export default Navbar;