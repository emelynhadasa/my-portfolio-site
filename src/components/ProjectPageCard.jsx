import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageCard = ({ language, projectTitle, projectDef, projectUrl }) => {
  return (
    <div className="project-page-card grey-card">
      <p className="language">{language}</p>
      <h3 className="project-title">{projectTitle}</h3>
      <p className="project-definition">{projectDef}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer"> 
        See repository
      </a>
    </div>
  )
}

ProjectPageCard.propTypes = {
  language: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDef: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
}

export default ProjectPageCard
