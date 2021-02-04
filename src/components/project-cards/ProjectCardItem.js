import React, { useState } from 'react';
import './ProjectCardItem.css';
import ModalGallery from '../modal-gallery/ModalGallery';

function ProjectCardItem({ projectObject }) {
  const { img, heading, desc } = projectObject;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (window.innerWidth >= 693) {
      setShowModal(true);
    }
  }

  const closeModal = () => setShowModal(false);

  return (
    <>
      <article className="project-item" onClick={openModal} >
        <div className="project-image-container" >
          <img className="project-image" src={img} alt="" />
          <div className="project-info">
            <i className="zoom fas fa-search"></i>
            <h3 className="project-heading">{heading}</h3>
            <p className="project-desc">{desc}</p>
          </div>
        </div>
      </article>
      { showModal ? <ModalGallery projectObject={projectObject} closeModal={closeModal} /> : null}
    </>
  );

}

export default ProjectCardItem;
