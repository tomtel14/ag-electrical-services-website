import React from 'react';
import './ServiceCardItem.css';

function ServiceCardItem(props) {
  return (
    <>
      <article className="service-item">
        <div className="service-image-container">
          <img className="service-image" alt={props.title} src={props.imagesrc} />
          <div className="service-icon-container">
            <img src={props.iconsrc} alt={props.title} />
          </div>
        </div>
        <div className="service-details">
          <h3 className="service-title">{props.title}</h3>
          <p className="service-text">{props.text}</p>
          <div className="service-footer">
            <img src="/images/logo-tiny.jpg" alt="" />
          </div>
        </div>
      </article>
    </>
  )
}

export default ServiceCardItem;
