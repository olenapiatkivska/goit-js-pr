import axios from 'axios';
import iziToast from 'izitoast';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';
  #searchParams = new URLSearchParams({
    per_page: 12,
    orientation: 'portrait',
    client_id: this.#API_KEY,
  });
  async getPopularPhotos(page) {
    const url = `${this.#BASE_URL}/search/photos?page=${page}&query=popular&${
      this.#searchParams
    }`;

    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        message: 'Error',
      });
    }
  }

  async getPhotosByQuery(page) {
    const url = `${this.#BASE_URL}/search/photos?page=${page}&query=${
      this.#query
    }&${this.#searchParams}`;

    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        message: 'Error',
      });
    }
  }
  set query(newQuery) {
    this.#query = newQuery;
  }

  async getStats() {
    const url = `${this.#BASE_URL}/stats/total?client_id=${this.#API_KEY}`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
