'use strict';

export default function getImages(searchWord) {
  const searchList = new URLSearchParams({
    key: '43977507-2af66c517d7aa54537609b2b2',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchList}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}