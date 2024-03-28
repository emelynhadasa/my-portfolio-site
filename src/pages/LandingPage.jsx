import React from 'react'
import LandingHeader from '../components/LandingHeader'
import MyJourney from '../components/MyJourney'
import MyWork from '../components/MyWork'
import ConfessionBox from '../components/ConfessionBox'
import Footer from '../components/Footer'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='landing-page'>
        <LandingHeader />
        <MyJourney />
        <MyWork />
        <ConfessionBox />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
