import css from "./ImageCard.module.css";

const ImageCard = ({ description, url }) => {
  return (
    <>
      <a href={url}>
        <img
          className={css.img}
          alt={description}
          src={url}
          width="50%"
          height="50%"
        />
      </a>
    </>
  );
};

export default ImageCard;
