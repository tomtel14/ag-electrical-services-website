import React, { useState, useEffect } from 'react';
import './ReviewSlider.css';
import reviews from '../../data/reviews';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function ReviewSlider() {
  const [testimonials] = useState(reviews);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = testimonials.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, testimonials])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 12000);

    return () => clearInterval(slider)

  }, [index])


  return (
    <div className="slider-container">
      <div className="section-center" >
        {testimonials.map((testimonial, testimonialIndex) => {
          const { id, image, quote, name } = testimonial;

          let position = 'nextSlide';
          if (testimonialIndex === index) {
            position = 'activeSlide';
          }
          if (testimonialIndex === index - 1 || (index === 0 && testimonialIndex === testimonials.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <div className="review-image-container">
                <img src={image} alt="" className="rev-image" />
              </div>
              <div className="review-text-container">
                <i className="quote-left fas fa-quote-left"></i>
                <i className="quote-right fas fa-quote-right"></i>
                <p className="quote-text">{quote}</p>
                <div className="review-footer">
                  <p className="quote-name">{name}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>

    </div>
  );
}

export default ReviewSlider;
