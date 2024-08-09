import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import ProjectCard from '../ProjectCard'

import './index.css'

const apiCallStatus = {
  Initial: 'Loading',
  Success: 'Success',
  Failure: 'Failure',
}

const CourseItemDetail = () => {
  const [SpecificDetails, setSpecificDetails] = useState({})
  const [apiStatus, setapiStatus] = useState(apiCallStatus.Initial)
  const {id} = useParams()

  useEffect(() => {
    const getSpecificDetails = async () => {
      setapiStatus(apiCallStatus.Initial)
      const url = `https://apis.ccbp.in/te/courses/${id}`
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        const formattedData = {
          id: data.course_details.id,
          ProjectName: data.course_details.name,
          url: data.course_details.image_url,
          description: data.course_details.description,
        }
        setSpecificDetails(formattedData)
        setapiStatus(apiCallStatus.Success)
      } else {
        setapiStatus(apiCallStatus.Failure)
      }
    }

    getSpecificDetails()
  }, [id])

  const SuccessView = () => (
    <ProjectCard SpecificProjectDetails={SpecificDetails} />
  )

  const FailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button">Retry</button>
    </div>
  )

  const LoadingView = () => <h1>Loading</h1>

  const resultView = () => {
    switch (apiStatus) {
      case apiCallStatus.Initial:
        return LoadingView()
      case apiCallStatus.Success:
        return SuccessView()
      case apiCallStatus.Failure: // Corrected this to Failure
        return FailureView()
      default:
        return null // Optionally handle unknown cases
    }
  }

  return resultView()
}

export default CourseItemDetail
