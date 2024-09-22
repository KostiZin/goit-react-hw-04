import css from "./ImageCard.module.css";

const ImageCard = ({ description, url }) => {
  return (
    <>
      <a href={url}>
        <img
          className={css.img}
          alt={description}
          src={url}
          width="100%"
          height="100%"
        />
      </a>
    </>
  );
};

export default ImageCard;
