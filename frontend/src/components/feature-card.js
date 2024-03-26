import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-container">
      <div className="feature-card-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card-image"
        />
      </div>
      <div className="feature-card-container2">
        <h5 className="feature-card-text Headline3">{props.newProp}</h5>
        <span className="feature-card-text1">{props.text}</span>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  newProp: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  imageSrc: '/01.svg',
  imageAlt: 'image',
}

FeatureCard.propTypes = {
  newProp: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard
