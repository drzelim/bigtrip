import { descriptions, getDestination } from '../mock/random-point';
import Smart from './smart';
import { getAllCities, getIsPointCity, getIsPointType, getPhotoFromDestinaitons } from '../utils/point.js';
import { getOffers } from '../utils/common.js';
import { points } from '../main';
import dayjs from 'dayjs';
import EditPoint from './edit-point';
import flatpickr from 'flatpickr';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';


const getCheckedIsOffers = (text, isOffers) => {
  let isOffer = '';
  isOffers.forEach((item) => {
    if (text === item) {
      isOffer = 'checked';
    }
  });
  return isOffer;
};

const getOfferCheckbox = (offers, isOffers) => {
  const arr = [];
  offers.forEach((offer) => (
    arr.push (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox visually-hidden" data-name="${offer.text}" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${getCheckedIsOffers(offer.text, isOffers)}>
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

const createNewPoint = (point, offers) => {
  const fullOffers = getOffers(point, offers);
  const city = getIsPointCity(point).join('');
  const type = getIsPointType(point).join('');
  const description = getDestination(city, descriptions);
  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type ? type.toLowerCase() : 'empty'}.png" alt="Event type icon">
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
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
           ${getAllCities(points).join('\n')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(point.startTime).toISOString()}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(point.endTime).toISOString()}">
        </div>
        <span id="event__time-error" class="visually-hidden" style="color: red; font-size: 14px">Дата начала события не может быть раньше даты окончания события</span>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${point.basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers ${fullOffers.length === 0 ? 'visually-hidden' : ''}">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers ">
            ${getOfferCheckbox(fullOffers, point.isOffers).join('\n')}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination ${description.length === 0 ? 'visually-hidden' : ''}">Destination</h3>
          <p class="event__destination-description">${description.length !== 0 ? description[0].description : ''}</p>

          <div class="event__photos-container ${description.length === 0 ? 'visually-hidden' : ''}">
            <div class="event__photos-tape">
              ${getPhotoFromDestinaitons(descriptions, city).join('\n')}
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

    this._datePickerStart = null;
    this._datePickerEnd = null;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formCloseClickHandler = this._formCloseClickHandler.bind(this);
    this._changeTypeHandler = this._changeTypeHandler.bind(this);
    this._changeCityHandler = this._changeCityHandler.bind(this);
    this._startDateChangeHandler = this._startDateChangeHandler.bind(this);
    this._endDateChangeHandler = this._endDateChangeHandler.bind(this);
    this._priceChangeHandler = this._priceChangeHandler.bind(this);
    this._offersCheckboxCangeHandler = this._offersCheckboxCangeHandler.bind(this);

    this._setInnerHandlers();
    this._setDatePicker();
  }

  getTemplate() {
    return createNewPoint(this._data, this._offers);
  }

  _formCloseClickHandler(evt) {
    evt.preventDefault();
    this._callback.onClickClose();
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit(EditPoint.parseDataToPoint(this._data, this._offers));
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().addEventListener('submit', this._formSubmitHandler);
  }

  setFormCloseClickHandler(callback) {
    this._callback.onClickClose = callback;
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._formCloseClickHandler);
  }

  _changeTypeHandler(evt) {
    if (evt.target.tagName === 'INPUT') {
      const isType = {};
      Object.keys(this._data.isType).forEach((key) => {
        if (key.toLowerCase() === evt.target.value) {
          isType[key] = true;
        } else {
          isType[key] = false;
        }
      });
      this.updateData({isType});
    }
  }

  _changeCityHandler(evt) {
    const isCity = {};
    const cities = Object.keys(this._data.isCity);
    const filter = cities.filter((item) => item === evt.target.value);
    if (filter.length !== 0) {
      cities.forEach((key) => {
        if (evt.target.value === key) {
          isCity[key] = true;
        } else {
          isCity[key] = false;
        }
      });
      this.updateData({isCity});
    }
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector('#event-destination-1')
      .addEventListener('change', this._changeCityHandler);

    this.getElement()
      .querySelector('.event__type-list')
      .addEventListener('change', this._changeTypeHandler);

    this.getElement()
      .querySelector('.event__available-offers')
      .addEventListener('change', this._offersCheckboxCangeHandler);
  }

  _priceChangeHandler(evt) {
    this._callback.priceHandler(evt);
  }

  setPriceChangeHandler(callback) {
    this._callback.priceHandler = callback;
    this.getElement().querySelector('#event-price-1').addEventListener('input', this._priceChangeHandler);
  }

  _offersCheckboxCangeHandler(evt) {
    if (this._data.isOffers.includes(evt.target.dataset.name)) {
      this._data.isOffers.forEach((item, index) => {
        if (item === evt.target.dataset.name) {
          this._data.isOffers = [
            ...this._data.isOffers.slice(0, index),
            ...this._data.isOffers.slice(index + 1)
          ];
        }
      });
      return;
    }
    this._data.isOffers.push(evt.target.dataset.name);
  }

  reset(data) {
    this.updateData(EditPoint.parsePointToData(data));
  }

  restoreHandlers() {
    this. _setInnerHandlers();
    this._setDatePicker();
    this.setFormCloseClickHandler(this._callback.onClickClose);
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setPriceChangeHandler(this._callback.priceHandler);
  }

  _setDatePicker() {
    if (this._datePickerStart) {
      this._datePickerStart.destroy();
      this._datePickerStart = null;
    }

    if (this._datePickerEnd) {
      this._datePickerEnd.destroy();
      this._datePickerEnd = null;
    }

    this._datePickerStart = flatpickr(
      this.getElement().querySelector('#event-start-time-1'),
      {
        dateFormat: 'd-m-y H:i',
        enableTime: true,
        'time_24hr': true,
        defaultDate: null,
        onChange: this._startDateChangeHandler,
      }
    );

    this._datePickerEnd = flatpickr(
      this.getElement().querySelector('#event-end-time-1'),
      {
        dateFormat: 'd-m-y H:i',
        enableTime: true,
        'time_24hr': true,
        defaultDate: null,
        onChange: this._endDateChangeHandler,
      }
    );
  }

  _startDateChangeHandler([startTime]) {
    const time = this._datePickerEnd.selectedDates[0] - this._datePickerStart.selectedDates[0];

    this.updateData({
      startTime: startTime.toISOString(),
    });

    if (time < 0) {
      this.getElement().querySelector('#event__time-error').classList.remove('visually-hidden');
    }
  }

  _endDateChangeHandler([endTime]) {
    const time = this._datePickerEnd.selectedDates[0] - this._datePickerStart.selectedDates[0];

    if (time < 0) {
      this.getElement().querySelector('#event__time-error').classList.remove('visually-hidden');
      return;
    }

    this.updateData({
      endTime: endTime.toISOString(),
    });
  }

}
