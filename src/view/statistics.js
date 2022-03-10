import Smart from './smart.js';
// class="visually-hidden
const createStatistics = () => {
  const one = 0;
  return (
    `<section class="statistics">
    <h2 ">Trip statistics</h2>

    <div class="statistics__item">
      <canvas class="statistics__chart" id="money" width="900"></canvas>
    </div>

    <div class="statistics__item">
      <canvas class="statistics__chart" id="type" width="900"></canvas>
    </div>

    <div class="statistics__item">
      <canvas class="statistics__chart" id="time" width="900"></canvas>
    </div>
  </section>`
  );
};

export default class Statistics extends Smart {
  constructor() {
    super();
  }

  restoreHandlers() {

  }

  getTemplate() {
    return createStatistics();
  }
}
