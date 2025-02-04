import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */ props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} alt="news"/>
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
