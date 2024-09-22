import React from "react";
import css from "./ImageModal.module.css";

//work on it
const ImageModal = ({ onRequestClose, subtitle }) => {
  return (
    <div className={css.container}>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={onRequestClose}>close</button>
    </div>
  );
};

export default ImageModal;
