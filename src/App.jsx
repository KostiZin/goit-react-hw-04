import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import "./App.css";
// import css from "../";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPages] = useState(0);
  // const [isModal, setIsModal] = useState(false);

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

  return (
    <div className={CSS.container}>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPage && <LoadMoreBtn addPage={handleChangePage} />}
    </div>
  );
}

export default App;

// axios.get("https://api.unsplash.com/search/photos?page=1&query=cats&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww").then((res) => console.log(res.data));
