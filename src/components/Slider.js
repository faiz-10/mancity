import React from "react";
import abc from './image/abc.webp'
import def from './image/def.webp'
import ghi from './image/ghi.webp'

class Slider extends React.Component {
    state = {  } 
    render() { 
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner p-5">
          <div className="carousel-item active">
            <img src={ghi} className="d-block w-100" alt="..." width='300px' />
          </div>
          <div className="carousel-item">
            <img src={def} className="d-block w-100" alt="..." width='300px' />
          </div>
          <div className="carousel-item">
            <img src={abc} className="d-block w-100" alt="..." width='300px'/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
} 
export default Slider;
