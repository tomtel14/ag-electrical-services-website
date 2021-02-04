import React from 'react';
import './ReviewsSection.css';
import ReviewSlider from '../review-slider/ReviewSlider';

function ReviewsSection({ isHomePage }) {
  return (
    <section className={isHomePage ? "reviews-section" : "reviews-section-standalone"}>
      <div className="reviews-section-container">
        <h1 className="reviews-title">Reviews</h1>
        <ReviewSlider />
      </div>
    </section>
  );
}

export default ReviewsSection;
