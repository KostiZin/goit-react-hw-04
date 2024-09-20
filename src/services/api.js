import axios from "axios";

export const fetchImages = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos?page=1&query=bengal&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww"
  );
  console.log(data.results);
  return data.results;
};
