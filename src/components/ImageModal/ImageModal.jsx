import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, selectedImage }) => {
  if (!selectedImage) return null;

  const { urls, alt_description } = selectedImage;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.container}
      overlayClassName={css.overlay}
    >
      <div className={css.imageWrapper}>
        {selectedImage && (
          <img
            src={urls.regular}
            alt={alt_description}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            className={css.image}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
