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
          <p>I am passionate to create something valuable yet easy. <img src='/images/plant.png' className='leaf-icon' alt='Plant Icon' /></p>
        </div>
        <div className='my-work-links'>
          <div className='my-project-links'>
            <h3>My Programs <img src='/images/laptop.png' className='laptop-icon' alt='Laptop Icon' /></h3>
            <Link to="/ProjectsPage">See my projects.</Link>
          </div>
          <div className='my-writing-links'>
            <h3>My Writings <img src='/images/note.png' className='note-icon' alt='Note Icon' /></h3>
            <a>See my essays and writings.</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MyWork
