import React, { useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPages] = useState(0);
  const [isModal, setIsModal] = React.useState(false);

  let subtitle;

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsError(false);

        setIsLoading(true);

        const data = await fetchImages(page, query);

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        //after loading we need to disable loading
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, query]);

  // We are setting the pages

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  //Search Bar

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  // Modal

  function openModal() {
    setIsModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsModal(false);
  }

  return (
    <div className={css.container}>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {
        <ImageModal
          isOpen={isModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          subtitle={subtitle}
        />
      }
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPage && <LoadMoreBtn addPage={handleChangePage} />}
    </div>
  );
}

export default App;
