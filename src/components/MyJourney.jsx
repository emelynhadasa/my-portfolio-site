/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import MyJourneyList from './MyJourneyList'

class MyJourney extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="my-journey">
        <div className='my-journey-header'>
          <h3>My Journey</h3><br/>
          <p>A a 19 passionate learner, with hands-on experience of Front-End advanced Bootcamp 
            and project experience. Dedicated to empower people through the power of diction forming.</p>
        </div>
        
        <MyJourneyList/>

      </div>
    )
  }
}

export default MyJourney
