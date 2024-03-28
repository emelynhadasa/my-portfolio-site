import React from 'react'
import PropTypes from 'prop-types'

const MyJourneyItem = ({ journeyTitle, journeyTime, journeyDef, imageUrl }) => {
  return (
    <div className="my-journey-item">
      <img src={imageUrl} alt={journeyTitle} className="journey-image" />
      <div className="journey-content">
        <h3 className="journey-title">{journeyTitle}</h3>
        <p className="journey-time">{journeyTime}</p>
        <p className="journey-definition">{journeyDef}</p>
      </div>
    </div>
  )
}

MyJourneyItem.propTypes = {
  journeyTitle: PropTypes.string.isRequired,
  journeyTime: PropTypes.string.isRequired,
  journeyDef: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default MyJourneyItem
