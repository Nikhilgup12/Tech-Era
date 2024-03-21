import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import {
  CourseDetailMainContainer,
  CourseDetailContainer,
  CourseDetailImage,
  CourseDetailNameContainer,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureButton,
  FailurePara,
} from './styledComponents'

const apiConstrant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CourseDetail extends Component {
  state = {courseDetail: {}, apiStatus: apiConstrant.initial}

  componentDidMount() {
    this.getCouseDetailList()
  }

  getFormatedData = data => ({
    id: data.id,
    name: data.name,
    imageUrl: data.image_url,
    description: data.description,
  })

  getCouseDetailList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok === true) {
      const data = await response.json()
      const formatedData = this.getFormatedData(data.course_details)
      this.setState({
        courseDetail: formatedData,
        apiStatus: apiConstrant.success,
      })
    } else {
      this.setState({apiStatus: apiConstrant.failure})
    }
  }

  onRetryButton = () => {
    this.getCouseDetailList()
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
    const {courseDetail} = this.state
    const {name, imageUrl, description} = courseDetail
    return (
      <CourseDetailMainContainer>
        <CourseDetailContainer>
          <CourseDetailImage src={imageUrl} alt={name} />
          <CourseDetailNameContainer>
            <h1> {name} </h1>
            <p> {description} </p>
          </CourseDetailNameContainer>
        </CourseDetailContainer>
      </CourseDetailMainContainer>
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

export default CourseDetail
