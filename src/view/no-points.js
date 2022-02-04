import Abstract from './abstarct.js';

const createNoPoints = () => ('<p class="trip-events__msg">Click New Event to create your first point</p>');

// Значение отображаемого текста зависит от выбранного фильтра:
//   * Everthing – 'Click New Event to create your first point'
//   * Past — 'There are no past events now';
//   * Future — 'There are no future events now'.

export default class NoPoints extends Abstract {
  getTemplate() {
    return createNoPoints();
  }
}
