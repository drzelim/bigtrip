import Abstract from './abstarct';

const totalPrice = (points) => points.reduce((acc, point) => (acc += point.basePrice), 0);

const createTripCost = (points) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice(points)}</span>
  </p>`
);

export default class TripCost extends Abstract {
  constructor (points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripCost(this._points);
  }
}
