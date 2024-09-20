import React from "react";

const ImageCard = ({ id, description, url }) => {
  return (
    <>
      <li key={id}>
        <h2>{description}</h2>
        <a href={url}>
          <img src={url} width="50%" height="50%" />
        </a>
      </li>
    </>
  );
};

export default ImageCard;
