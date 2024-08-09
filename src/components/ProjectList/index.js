import {useState, useEffect} from 'react'

import ProjectItem from '../ProjectItem'

import './index.css'

const ProjectList = () => {
  const [List, setList] = useState([])

  const getProjectList = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const formattedData = data.courses.map(eachItem => ({
        id: eachItem.id,
        imgUrl: eachItem.logo_url,
        name: eachItem.name,
      }))
      setList(formattedData)
    }
  }

  useEffect(() => {
    getProjectList()
  }, [])

  return (
    <div>
      <h1>Courses</h1>
      <ul className="project-list-con">
        {List.map(each => (
          <ProjectItem ProjectDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
