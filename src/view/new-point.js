import { descriptions, getDestination } from '../mock/random-point';
import Smart from './smart';
import { getAllCities, getIsPointCity, getIsPointType, getOfferCheckbox, getPhoto, price } from '../utils/point.js';
import { getOffers } from '../utils/common.js';
import { points } from '../main';
import dayjs from 'dayjs';
import EditPoint from './edit-point';

// const getDesciption = (city, info) => {
//   if (!city) {
//     return [{description: ''}];
//   }
//   return info.filter((item) => item.name === city);
// };

// const getPhoto = (desc) => {
//   if (!desc.photo) {
//     return [];
//   }
//   return desc.photo.map((item) => `<img class="event__photo" src="${item.src}" alt="${item.description}">`);
// } ;

const createNewPoint = (point, offers) => {
  const fullOffers = getOffers(point, offers);
  const city = getIsPointCity(point);
  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${getIsPointType(point).join('').toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${point.isType.Taxi ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${point.isType.Bus ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${point.isType.Train ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${point.isType.Ship ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${point.isType.Drive ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${point.isType.Flight ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${point.isType['Check-In'] ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${point.isType.Sightseeing ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${point.isType.Restaurant ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport" ${point.isType.Transport ? 'checked' : ''}>
                <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${getIsPointType(point).join('')}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city.join('')}" list="destination-list-1">
          <datalist id="destination-list-1">
           ${getAllCities(points).join('\n')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(point.startTime).format('DD/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(point.endTime).format('DD/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price(fullOffers)}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers ${fullOffers.length === 0 ? 'visually-hidden' : ''}">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers ">
            ${getOfferCheckbox(fullOffers).join('\n')}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${getDestination(city[0], descriptions)[0].description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${getPhoto(point).join('\n')}
            </div>
          </div>
        </section>
      </section>
    </form>`
  );
};

export default class NewPoint extends Smart {
  constructor(point, offers) {
    super();

    this._point = point;
    this._data = EditPoint.parsePointToData(point);
    this._offers = offers;
  }

  getTemplate() {
    return createNewPoint(this._data, this._offers);
  }

  restoreHandlers() {

  }

}
