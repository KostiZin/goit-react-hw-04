import axios from "axios";

export const fetchImages = async (page = 1) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=ukraine&per_page=3&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww`
  );

  return data;
};
