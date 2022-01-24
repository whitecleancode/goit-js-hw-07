import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const onGalleryPlace = document.querySelector('.gallery');

let picArr = galleryItems.map(pic => {
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

const lightbox = $('.gallery a').simpleLightbox({
  captionsData: 'alt',
  captionsDelay: 250,
});
