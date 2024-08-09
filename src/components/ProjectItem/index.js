// import {Link} from 'react-router-dom'

// import './index.css'

// const ProjectItem = props => {
//   const {ProjectDetails} = props
//   const {imgUrl, name, id} = ProjectDetails
//   return (
//     <Link to={`/blogs/${id}`}>
//       <li className="list-con">
//         <img src={imgUrl} alt="img" />
//         <p>{name}</p>
//       </li>
//     </Link>
//   )
// }

// export default ProjectItem

import {Link} from 'react-router-dom'
import './index.css'

const ProjectItem = props => {
  const {ProjectDetails} = props
  const {imgUrl, name, id} = ProjectDetails
  return (
    <li className="list-con">
      <Link to={`/courses/${id}`}>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default ProjectItem
