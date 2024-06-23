export function markup(imgs) {
  return imgs
    .map(
      ({
        id,
        urls: { small },
        alt_description,
      }) => `   <li class="gallery__item"  id="${id}">
            <img src="${small}" alt="${alt_description}" >
          </li>`
    )
    .join('');
}
