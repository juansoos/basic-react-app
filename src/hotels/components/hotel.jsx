import React from 'react';
import PropTypes from 'prop-types';
import img from '../../../assets/images/hotels/hotel.jpg';
import './hotel.css';

const Hotel = props => (
  <div className="Hotel">
    <div className="container">
      <div className="box-1">
        <img className="image" src={img} alt="img hotel" />
      </div>
      <div className="box-2">
        <h1>{props.name}</h1>
      </div>
      <div className="box-3">
        <small className="smallText">Precio por noche</small>
        <h3>{props.price}</h3>
        <button onClick={props.handleClick} className="btn">Ver hotel</button>
      </div>
    </div>
  </div>
);

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Hotel;
