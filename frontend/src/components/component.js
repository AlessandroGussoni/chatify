import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <span className="app-component-text">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Features',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
