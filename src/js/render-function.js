export function markup(imgs) {
  return imgs
    .map(
      img => `   <li class="gallery__item"  id="${img.id}">
            <img src="${img.urls.small}" alt="${img.urls.alt_description}" >
          </li>`
    )
    .join('');
}
