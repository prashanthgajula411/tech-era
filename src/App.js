// // import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ProjectList from './components/ProjectList'
// import SpecificProjectDetails from './components/SpecificProjectDetails'
// import './App.css'

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={ProjectList} />
//       <Route path="/blogs/:id" component={SpecificProjectDetails} />
//     </Switch>
//   </BrowserRouter>
// )

// export default App
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProjectList from './components/ProjectList'
import CourseItemDetail from './components/CourseItemDetail'
import Header from './components/Header'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ProjectList} />
      <Route path="/courses/:id" component={CourseItemDetail} />
    </Switch>
  </BrowserRouter>
)

export default App
