import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ul}>
      {images.map((item) => (
        <li key={item.id} className={css.li}>
          <ImageCard description={item.description} url={item.urls.small} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
