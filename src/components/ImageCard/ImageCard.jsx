import css from "./ImageCard.module.css";

const ImageCard = ({ description, url }) => {
  return (
    <>
      <h2>{description}</h2>
      <a href={url}>
        <img className={css.img} src={url} width="50%" height="50%" />
      </a>
    </>
  );
};

export default ImageCard;
