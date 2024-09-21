import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

// import "./App.css";

// Application ID 655694
// Access Key mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww
// Secret key Im-vM6fXgd_MKm4iWVH5jucpyUYUUmKwKwnbobFBJRQ

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  console.log(images);

  //SearchBar
  // const [inputValue, setInputValue] = useState("ukraine");
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  //   console.log(inputValue);
  // };

  const isFirstRender = useRef(true);

  useEffect(() => {
    //double-check
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const getImages = async () => {
      try {
        setIsError(false);

        setIsLoading(true);

        console.log("Fetching images for page:", page);

        const data = await fetchImages(page);

        console.log("Fetched images:", data.results);

        setImages((prev) => [...prev, ...data.results]);
        setPage(page);
        // setImages(data.results);
      } catch {
        setIsError(true);
      } finally {
        //after loading we need to disable loading
        setIsLoading(false);
      }
    };
    getImages();
  }, [page]);

  const handleChangePage = () => {
    console.log(page);
    setPage((prev) => prev + 1);
  };

  console.log(images);

  return (
    <div>
      {/* <SearchBar input={inputValue} onSubmit={handleInputChange} /> */}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn addPage={handleChangePage} />}
      {/* <button onClick={handleChangePage}>Load more</button> */}
    </div>
  );
}

export default App;

// axios.get("https://api.unsplash.com/search/photos?page=1&query=cats&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww").then((res) => console.log(res.data));
