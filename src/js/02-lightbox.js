import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
console.log(galleryItems);

const onGalleryPlace = document.querySelector('.gallery');

let picArr = galleryItems.map(pic => {
  return `<li class="gallery__item">
      <a class="gallery__link" href="${pic.original}">
        <img
          class="gallery__image"
          src="${pic.preview}"
          data-source="${pic.original}"
          alt="${pic.description}"
        />
      </a>
  </li>`;
});
console.log(picArr);
onGalleryPlace.insertAdjacentHTML('afterbegin', picArr.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
