// Write your code here
import {Component} from 'react'
import './index.css'

const LEFT_ARROW_URL =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const RIGHT_ARROW_URL =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {
    currentReview: 0,
  }

  onClickingLeftButton = () => {
    const {currentReview} = this.state
    const {reviewsList} = this.props
    if (currentReview > 0) {
      this.setState(prevState => ({currentReview: prevState.currentReview - 1}))
    }
  }

  onClickingRightButton = () => {
    const {currentReview} = this.state
    const {reviewsList} = this.props
    const reviewsLength = reviewsList.length - 1
    if (currentReview < reviewsLength) {
      this.setState(prevState => ({currentReview: prevState.currentReview + 1}))
    }
  }

  render() {
    const {currentReview} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[
      currentReview
    ]

    return (
      <div className="app-container">
        <h1 className="reviews-text">Reviews</h1>
        <div className="carousel-container">
          <button
            data-testid="leftArrow"
            className="arrow-btn"
            onClick={this.onClickingLeftButton}
          >
            <img src={LEFT_ARROW_URL} alt="left arrow" />
          </button>
          <div className="carousel-item">
            <img className="user-img" src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="arrow-btn"
            onClick={this.onClickingRightButton}
          >
            <img src={RIGHT_ARROW_URL} alt="right arrow" />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
