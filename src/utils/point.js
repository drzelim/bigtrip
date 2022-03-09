export const getAllCities = (data) => {
  const cities = new Set();
  data.map((point) => cities.add(`<option value="${point.city}">${point.city}</option>`));
  return Array.from(cities);
};

export const price = (offers) => {
  const sumPrice = offers.reduce((acc, offer) => (acc += offer.price), 0);
  return sumPrice;
};

// const getCheckedOffers = (text, isOffers) => {
//   let isOffer = '';
//   isOffers.forEach((item) => {
//     if (text === item) {
//       isOffer = 'checked';
//     }
//   });
//   return isOffer;
// };

export const getPhoto = (point) => point.place.photos.map((photo) => `<img class="event__photo" src="${photo.src}" alt="Event photo">`);

export const getPhotoFromDestinaitons = (data, city) => {
  const currentType = data.filter((item) => item.name === city);
  const arrPhotos = currentType.map((item) => item.photo);
  return arrPhotos.flat().map((item) => `<img class="event__photo" src="${item.src}" alt="${item.description}">`);
};

export const getIsPointType = (point) => Object.keys(point.isType).filter((key) => point.isType[key]);

export const getIsPointCity = (point) => Object.keys(point.isCity).filter((key) => point.isCity[key]);
