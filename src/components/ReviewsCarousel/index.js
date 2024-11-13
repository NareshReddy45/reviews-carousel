import {useState} from 'react'
import './index.css'

function ReviewsCarousel({reviewsList}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < reviewsList.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const currentReview = reviewsList[currentIndex]

  return (
    <div className="bg-container">
      <h1>Reviews</h1>
      <div className="carousel-container">
        <button
          onClick={handlePrevious}
          className="arrow-button"
          disabled={currentIndex === 0}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>

        <div className="review-content">
          <img
            src={currentReview.imgUrl}
            alt={currentReview.username}
            className="review-image"
          />
          <p className="review-username">{currentReview.username}</p>
          <p className="review-company">{currentReview.companyName}</p>
          <p className="review-description">{currentReview.description}</p>
        </div>

        <button
          onClick={handleNext}
          className="arrow-button"
          disabled={currentIndex === reviewsList.length - 1}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
