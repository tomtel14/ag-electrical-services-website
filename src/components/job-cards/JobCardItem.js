import React from 'react';
import './JobCardItem.css';
import { BsLightning } from 'react-icons/bs';

function JobCardItem(props) {
  return (
    <>
      <li className="job-item">
        <BsLightning className="bolt" />
        <h3 className="job-text">{props.text}</h3>
      </li>
    </>
  )
}

export default JobCardItem;
