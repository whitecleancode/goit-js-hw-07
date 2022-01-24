import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
console.log(galleryItems);

const onGalleryPlace = document.querySelector('.gallery');

let picArr = galleryItems.map(pic => {
  return `
      <a class="gallery__item" href="${pic.original}">
        <img
          class="gallery__image"
          src="${pic.preview}"
          
          alt="${pic.description}"
        />
      </a>
  `;
});
onGalleryPlace.insertAdjacentHTML('afterbegin', picArr.join(''));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
