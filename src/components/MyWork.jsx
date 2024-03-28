import React from 'react'
import { Link } from 'react-router-dom'

class MyWork extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='my-work'>
        <div className='my-work-header'>
          <h3>My work recaps</h3><br/>
          <p>I am passionate to create something valuable. <img src="../../public/images/plant.png" className='leaf-icon'/></p>
        </div>
        <div className='my-work-links'>
          <div className='my-project-links'>
            <h3>My Programs <img src="../../public/images/laptop.png" className='laptop-icon'/></h3>
            <Link to="/ProjectsPage">See my projects.</Link>
          </div>

          <div className='my-writing-links'>
            <h3>My Writings <img src="../../public/images/note.png" className='note-icon'/></h3>
            <a>See my essays and writings.</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MyWork
