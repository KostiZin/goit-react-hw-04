import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((item) => (
        <ImageCard
          key={item.id}
          description={item.description}
          url={item.urls.small}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
