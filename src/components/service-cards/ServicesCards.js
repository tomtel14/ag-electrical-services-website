import React from 'react';
import ServiceCardItem from '../service-cards/ServiceCardItem';
import './ServicesCards.css';

function ServicesCard() {
  return (
    <section className="services-section">
      <div className="services-section-container">
        <h2 className="services-title">Services</h2>
        <div className="services-cards-container">
          <ul className="service-cards">
            <ServiceCardItem
              imagesrc='/images/rewire.jpg'
              iconsrc='/images/icon-rewire.jpg'
              title="Full & Partial Rewire"
              text="Whether your home needs a full rewire, you are having a new kitchen or bathroom installed or you are having a garage or loft converted into a habitable room, I will be able to help you with this."
            />
            <ServiceCardItem
              imagesrc='/images/inspection.jpg'
              iconsrc='/images/icon-inspection.jpg'
              title="Electrical Installation Condition Report (EICR)"
              text="It is now a mandatory requirement for landlords to have an EICR on any rented domestic or commercial property - at least every 5 years, or at the start of a new tenancy."
            />
            <ServiceCardItem
              imagesrc='/images/outdoor-lighting.jpg'
              iconsrc='/images/icon-outdoor-lighting.jpg'
              title="Outdoor Lighting"
              text="Whether you have an area outside that you would like illuminating, an exterior socket adding, have an outbuilding you would like to have power run to or have decking or paving installed, I will be able to help you with this."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
