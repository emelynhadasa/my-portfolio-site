import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageCard = ({ language, projectTitle, projectDef}) => {
  return (
    <div className="project-page-card grey-card">
      <p className="language">{language}</p>
      <h3 className="project-title">{projectTitle}</h3>
      <p className="project-definition">{projectDef}</p>
    </div>
  )
}

ProjectPageCard.propTypes = {
  language: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDef: PropTypes.string.isRequired,
}

export default ProjectPageCard
