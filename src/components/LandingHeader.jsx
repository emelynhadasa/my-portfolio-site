/* eslint-disable react/no-unescaped-entities */
import React from 'react'

class LandingHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="landing-header">
        <p className="header-text">
          <span className="italic-landing-header">Hey, I'm</span>
          <br />
          <span className="big-landing-header">EMELYN HADASA</span>
        </p>
      </div>
    )
  }
}

export default LandingHeader
