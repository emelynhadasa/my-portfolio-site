import React from 'react'
import ProjectPageCard from './ProjectPageCard'
import { getProjectData } from '../utils/project-data'

const ProjectPageList = () => {
  const projectData = getProjectData() 
  return (
    <div className="my-project-list">
      {projectData.map(item => (
        <ProjectPageCard
          key={item.id}
          language={item.language}
          projectTitle={item.projectTitle}
          projectDef={item.projectDef}
          projectUrl={item.projectUrl}
        />
      ))}
    </div>
  )
}

export default ProjectPageList
