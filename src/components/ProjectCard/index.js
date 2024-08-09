const ProjectCard = props => {
  const {SpecificProjectDetails} = props
  const {ProjectName, url, description} = SpecificProjectDetails

  return (
    <div>
      <img src={url} alt={ProjectName} />
      <h1>{ProjectName}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard
