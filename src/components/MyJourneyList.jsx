import React from 'react'
import MyJourneyItem from './MyJourneyItem'
import { getData } from '../utils/my-journey-data'

const MyJourneyList = () => {
  const journeyData = getData() 
  return (
    <div className="my-journey-list">
      {journeyData.map(item => (
        <MyJourneyItem
          key={item.id}
          journeyTitle={item.journeyTitle}
          journeyTime={item.journeyTime}
          journeyDef={item.journeyDef}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )
}

export default MyJourneyList
