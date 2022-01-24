import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
// Change code below this line

const onGalleryPlace = document.querySelector('.gallery');

const picArr = galleryItems.map(pic => {
  return `<div class="gallery__item">
      <a class="gallery__link" href="${pic.original}">
        <img
          class="gallery__image"
          src="${pic.preview}"
          data-source="${pic.original}"
          alt="${pic.description}"
        />
      </a>
  </div>`;
});

onGalleryPlace.insertAdjacentHTML('afterbegin', picArr.join(''));

onGalleryPlace.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();

    function closePicture(event) {
      if (event.code === 'Escape') {
        instance.close();
        onGalleryPlace.removeEventListener('keydown', closePicture);
      }
    }
    onGalleryPlace.addEventListener('keydown', closePicture);
  } else {
    instance.close();
  }
});
