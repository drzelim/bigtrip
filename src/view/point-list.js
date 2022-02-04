import Abstract from './abstarct.js';

const createPointsContainer = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class PointList extends Abstract {
  getTemplate() {
    return createPointsContainer();
  }
}
