import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import AbstractView from './abstarct';
dayjs.extend(duration);

const getOffersInfo = (point) => {
  const arr = [];
  point.offers.forEach((i) => {
    arr.push(
      `<li class="event__offer">
        <span class="event__offer-title">${i.text}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${i.price}</span>
      </li>`
    );
  });
  return arr;
};

const getEventDuration = (dateFrom, dateTo) => {
  const to = dayjs(dateTo);
  const from = dayjs(dateFrom);
  const date = to.diff(from, 'minute');
  if (date < 60) {
    return `${dayjs.duration(date, 'minute').format('mm')}M`;
  } else if (date >= 60 && date < 60 * 24) {
    return `${dayjs.duration(date, 'minute').format('HH')}H ${dayjs.duration(date, 'minute').format('mm')}M`;
  } else if (date >=  60 * 24) {
    return `${dayjs.duration(date, 'minute').format('DD')}D ${dayjs.duration(date, 'minute').format('HH')}H ${dayjs.duration(date,  'minute').format('mm')}M`;
  }
};

const createPoint = (point) => {
  const date = dayjs(point.startTime).format('MMM D');
  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${point.type} ${point.city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(point.startTime).format('YYYY-MM-DDTHH:mm')}">${dayjs(point.startTime).format('HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs(point.endTime).format('YYYY-MM-DDTHH:mm')}">${dayjs(point.endTime).format('HH:mm')}</time>
          </p>
          <p class="event__duration">${getEventDuration(point.startTime, point.endTime)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${getOffersInfo(point).join(' ')}
        </ul>
        <button class="event__favorite-btn ${point.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class Point extends AbstractView {
  constructor(point, offers) {
    super();

    this._point = point;
    this._offers = offers;

    this._pointClickHandler = this._pointClickHandler.bind(this);
    this._favoriteChangeHandler = this._favoriteChangeHandler.bind(this);
  }

  getTemplate() {
    return createPoint(this._point);
  }

  _pointClickHandler(evt) {
    evt.preventDefault();
    this._callback.pointClick();
  }

  setPointClickHandler(pointClick) {
    this._callback.pointClick = pointClick;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this. _pointClickHandler);
  }

  _favoriteChangeHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteChange();
  }

  setFavoriteChangeHandler(callback) {
    this._callback.favoriteChange = callback;
    this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favoriteChangeHandler);
  }
}
