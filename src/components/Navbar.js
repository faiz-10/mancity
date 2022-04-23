import React from 'react';

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Man City
          </a>  
        </div>
      </nav>
    );
  }
}

export default Navbar;
