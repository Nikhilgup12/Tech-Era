import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CourseDetail from './components/CourseDetail'
import NotFound from './components/NotFound'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetail} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
