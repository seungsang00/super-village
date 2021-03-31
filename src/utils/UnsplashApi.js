import axios from 'axios';

const baseURL = 'https://api.unsplash.com/';
const API_KEY = 'JXx84b_RWeREKB4ojVyJ2Hr97B53Y9GMwpJw4vdwaOs';

const api = axios.create({
  baseURL,
  params: {
    client_id: API_KEY,
  },
});

const getImages = (per_page = 10, page = 1, order_by = 'latest') => {
  return api.get('/photos', {
    params: {
      page,
      per_page,
      order_by,
    },
  });
};

const getImageInfo = (id) => {
  return api.get('/photos', {
    params: { id },
  });
};

const getRandomImages = (count = 10, query = null, orientation = null) => {
  return api.get('/photos/random', {
    params: {
      query,
      count,
      orientation,
    },
  });
};

const getSearchImages = (query, page = 1, per_page = 10, orientation = null) => {
  return api.get('/search/photos', {
    params: {
      query,
      page,
      per_page,
      orientation,
    },
  });
};

const unsplashApi = {
  ORDER_BY: {
    Latest: 'latest',
    Oldest: 'oldest',
    Popular: 'popular',
  },
  ORIENTATION: {
    Landscape: 'landscape',
    Portrait: 'portrait',
    Squarish: 'squarish',
  },
  getImages,
  getImageInfo,
  getRandomImages,
  getSearchImages,
};

export default unsplashApi;
