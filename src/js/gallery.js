import { UnsplashAPI } from './UnsplashAPI';
import { markup } from './render-function';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
const galleryList = document.querySelector('.js-gallery');

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

const api = new UnsplashAPI();
api
  .getPopularPhotos(page)
  .then(data => {
    const markupImg = markup(data.results);
    galleryList.innerHTML = markupImg;
    pagination.reset(data.total);
  })
  .catch(error => console.log(error));

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(data => {
      const markupImg = markup(data.results);
      galleryList.innerHTML = markupImg;
    })
    .catch(error => console.log(error));
});
