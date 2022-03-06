export const getAllCities = (data) => {
  const cities = new Set();
  data.map((point) => cities.add(`<option value="${point.city}">${point.city}</option>`));
  return Array.from(cities);
};

export const price = (offers) => {
  const sumPrice = offers.reduce((acc, offer) => (acc += offer.price), 0);
  return sumPrice;
};

export const getOfferCheckbox = (offers) => {
  const arr = [];
  offers.forEach((offer) => (
    arr.push (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" data-id="${offer.id}" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}">
        <label class="event__offer-label" for="event-offer-${offer.id}" >
          <span class="event__offer-title">${offer.text}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`
    ))
  );
  return arr;
};

export const getPhoto = (point) => point.place.photos.map((photo) => `<img class="event__photo" src="${photo.src}" alt="Event photo">`);

export const getPhotoFromDestinaitons = (data, city) => {
  const currentType = data.filter((item) => item.name === city);
  const arrPhotos = currentType.map((item) => item.photo);
  return arrPhotos.flat().map((item) => `<img class="event__photo" src="${item.src}" alt="${item.description}">`);
};

export const getIsPointType = (point) => Object.keys(point.isType).filter((key) => point.isType[key]);

export const getIsPointCity = (point) => Object.keys(point.isCity).filter((key) => point.isCity[key]);
