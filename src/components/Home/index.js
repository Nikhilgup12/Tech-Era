import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import {
  HomeMainContainer,
  HomeContainer,
  CourseListContainer,
  CourseList,
  HomeMainHeading,
  CourseImage,
  CourseHeading,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureButton,
  FailurePara,
} from './styledComponent'

const apiConstrant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiConstrant.initial}

  componentDidMount() {
    this.getCouseList()
  }

  getCouseList = async () => {
    this.setState({apiStatus: apiConstrant.loading})
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok === true) {
      const data = await response.json()
      const formatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))

      this.setState({
        courseList: formatedData,
        apiStatus: apiConstrant.success,
      })
    } else {
      this.setState({apiStatus: apiConstrant.failure})
    }
  }

  onRetryButton = () => {
    this.getCouseList()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <>
      <FailureContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <FailureHeading> Oops! Something Went Wrong </FailureHeading>
        <FailurePara>
          we cannot seem to find the page you are looking for
        </FailurePara>
        <FailureButton onClick={this.onRetryButton} type="button">
          Retry
        </FailureButton>
      </FailureContainer>
    </>
  )

  renderSuccessView = () => {
    const {courseList} = this.state
    return (
      <HomeMainContainer>
        <HomeContainer>
          <HomeMainHeading> Course </HomeMainHeading>
          <CourseListContainer>
            {courseList.map(each => (
              <Link to={`/courses/${each.id}`}>
                <CourseList>
                  <CourseImage src={each.logoUrl} alt={each.name} />
                  <CourseHeading> {each.name} </CourseHeading>
                </CourseList>
              </Link>
            ))}
          </CourseListContainer>
        </HomeContainer>
      </HomeMainContainer>
    )
  }

  renderShowResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstrant.success:
        return this.renderSuccessView()
      case apiConstrant.failure:
        return this.renderFailureView()
      case apiConstrant.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        {this.renderShowResult()}
      </>
    )
  }
}

export default Home
