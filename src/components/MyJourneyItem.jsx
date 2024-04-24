import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const MyJourneyItem = ({ journeyTitle, journeyTime, journeyDef, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(itemRef.current)
        }
      },
      { threshold: 0.5 } // Threshold untuk menentukan seberapa banyak item yang terlihat sebelum efek fade-in dijalankan
    )

    observer.observe(itemRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={itemRef} className={`my-journey-item ${isVisible ? 'fade-in' : ''}`}>
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
