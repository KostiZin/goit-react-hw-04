import axios from "axios";
import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

// import "./App.css";

// Application ID 655694
// Access Key mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww
// Secret key Im-vM6fXgd_MKm4iWVH5jucpyUYUUmKwKwnbobFBJRQ

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      console.log(data);
      setImages(data);
    };
    getImages();
  }, []);

  return (
    <div>
      <input type="text" />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;

// axios.get("https://api.unsplash.com/search/photos?page=1&query=cats&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww").then((res) => console.log(res.data));

{
  /* <ul>
        {images.map((item) => (
          <li key={item.id}>
            <h2>{item.description}</h2>
            <a href={item.links.html}>
              <img src={item.urls.small} width="50%" height="50%" />
            </a>
          </li>
        ))}
      </ul> */
}
