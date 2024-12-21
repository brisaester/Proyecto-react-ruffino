import axios from 'axios';

const searchImages = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID OFYCkWY412hNm5F2U6rIHMxKS4FkqNK9DGsTHyxMneE"
      },
      params: {
        query: "Dogs"
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error al buscar imágenes:', error);
  }
};

searchImages();


