import React from 'react';
import img1 from './image/mci_logo.png';
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor : '#98c5e9'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={img1} width='100px' height='auto'/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color : 'white'}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Fixtures</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
            </ul>
            <span className="navbar-text">
              <a href=''>Sign up</a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
