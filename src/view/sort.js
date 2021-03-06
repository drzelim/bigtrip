import Smart from './smart.js';


const createSort = () => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-name="day" checked>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-name="time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-name="price">
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`
);

export default class Sort extends Smart {

  constructor() {
    super();

    this._onSortHandler = this._onSortHandler.bind(this);
  }

  getTemplate() {
    return createSort();
  }

  restoreHandlers() {
    this.changeSortHandler(this._callback.sortHandler);
  }

  _onSortHandler(evt) {
    if (evt.target.dataset.name === 'day' || evt.target.dataset.name === 'time' || evt.target.dataset.name === 'price') {
      this._callback.sortHandler(evt.target.dataset.name);
    }
  }

  changeSortHandler(callback) {
    this._callback.sortHandler = callback;
    this.getElement().addEventListener('click', this._onSortHandler);
  }
}
