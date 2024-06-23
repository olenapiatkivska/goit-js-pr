import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { UnsplashAPI } from './UnsplashAPI';
import { markup } from './render-function';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
const galleryList = document.querySelector('.js-gallery');
const searchFormElem = document.querySelector('.js-search-form');
const loaderElem = document.querySelector('.loader');

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

function popularImages(event) {
  const currentPage = event.page;
  loaderElem.classList.remove('visually-hidden');
  api
    .getPopularPhotos(currentPage)
    .then(data => {
      const markupImg = markup(data.results);
      galleryList.innerHTML = markupImg;
    })
    .catch(error => console.log(error))
    .finally(() => loaderElem.classList.add('visually-hidden'));
}
pagination.on('afterMove', popularImages);

searchFormElem.addEventListener('submit', async event => {
  event.preventDefault();
  const inputValue = searchFormElem.elements.query.value.trim();
  if (!inputValue) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please fill query field',
    });
    return;
  }
  pagination.off('afterMove', popularImages);
  pagination.off('afterMove', byQueryImages);
  api.query = inputValue;
  loaderElem.classList.remove('visually-hidden');
  try {
    const data = await api.getPhotosByQuery(page);
    if (!data.results.length) {
      iziToast.warning({
        position: 'topRight',
        message: 'No results',
      });
      return;
    }
    iziToast.info({
      position: 'topRight',
      message: `We found ${data.total} results`,
    });
    if (data.total <= 12) {
      container.classList.add('visually-hidden');
    } else {
      container.classList.remove('visually-hidden');
    }
    const markupImg = markup(data.results);
    galleryList.innerHTML = markupImg;
    pagination.reset(data.total);
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error',
    });
    console.log(error);
  } finally {
    loaderElem.classList.add('visually-hidden');
    searchFormElem.reset();
  }
  pagination.on('afterMove', byQueryImages);
});

function byQueryImages(event) {
  const currentPage = event.page;
  loaderElem.classList.remove('visually-hidden');
  api
    .getPhotosByQuery(currentPage)
    .then(data => {
      const markupImg = markup(data.results);
      galleryList.innerHTML = markupImg;
    })
    .catch(error => console.log(error))
    .finally(() => loaderElem.classList.add('visually-hidden'));
}

galleryList.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const id = event.target.closest('li').id;
  console.log(id);
});

api
  .getStats()
  .then(data => console.log(data))
  .catch(error => console.log(error));
