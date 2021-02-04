import React from 'react';
import './JobCards.css';
import JobCardItem from './JobCardItem';

function JobCards() {
  return (
    <div className="jobs-section-container">
      <div className="job-cards-container">
        <ul className="job-cards">
          <JobCardItem text="Full & partial rewires" />
          <JobCardItem text="Replacement consumer units" />
          <JobCardItem text="LED lighting installation/upgrade" />
          <JobCardItem text="Fault finding" />
          <JobCardItem text="Electrical Installation Condition Report (EICR)" />
          <JobCardItem text="Outdoor lighting & power" />
          <JobCardItem text="Smoke/CO detectors" />
          <JobCardItem text="Security lighting/cameras" />
        </ul>
      </div>
    </div>
  );
}

export default JobCards;
