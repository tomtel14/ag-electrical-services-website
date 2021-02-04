import React, { useEffect } from 'react';
import './ModalGallery.css';

function ModalGallery({ closeModal, projectObject: { largeimg, portrait } }) {

  useEffect(() => {
    console.log("first render");
    // give it styles to position the site correctly. use old fashioned js here
    const body = document.getElementsByTagName("body")[0];
    body.classList.add('modal-open');

    return function cleanup() {
      console.log("unmount");
      // remove those same styles
      body.classList.remove('modal-open');
    }
  }, [])

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div className={portrait ? "modal-img-cont-portrait" : "modal-img-cont"}>
        <img className="modal-img" src={largeimg} alt="" />
        <i className="fas fa-times close-btn" onClick={closeModal}></i>
      </div>
    </div>
  );
}

export default ModalGallery;
