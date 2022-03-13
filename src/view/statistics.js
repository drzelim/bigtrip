import Smart from './smart.js';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import dayjs from 'dayjs';
import { getEventDuration } from '../utils/common.js';

const getMoneyChart = (component, types, prices) => {
  const moneyCtx = component.getElement().querySelector('#money');

  const BAR_HEIGHT = 45;
  moneyCtx.height = BAR_HEIGHT * types.length;

  new Chart(moneyCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: types,
      datasets: [{
        data: prices,
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
      }],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => `€ ${val}`,
        },
      },
      title: {
        display: true,
        text: 'MONEY',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          minBarLength: 50,
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const getTypeChart = (component, types, counts) => {
  const typeCtx = component.getElement().querySelector('#type');

  const BAR_HEIGHT = 45;
  typeCtx.height = BAR_HEIGHT * types.length;

  new Chart(typeCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: types,
      datasets: [{
        data: counts,
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
      }],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => `${val}x`,
        },
      },
      title: {
        display: true,
        text: 'TYPE',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          minBarLength: 50,
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const getTimeChart = (component, types, times) => {
  const timeCtx = component.getElement().querySelector('#time');

  const BAR_HEIGHT = 45;
  timeCtx.height = BAR_HEIGHT * types.length;

  new Chart(timeCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: types,
      datasets: [{
        data: times,
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
      }],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => `${getEventDuration(null, null, val)}`,
        },
      },
      title: {
        display: true,
        text: 'TIME',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          minBarLength: 100,
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const createStatistics = () => (
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


export default class Statistics extends Smart {
  constructor(pointsModel) {
    super();

    this._pointsModel = pointsModel;
    this._points = [];

    this._moneyTypes = [];
    this._basePrices = [];

    this._types = [];
    this._typesCount = [];

    this._timeTypes = [];
    this._typesDurations = [];

    this._createCharts();
  }

  getTemplate() {
    return createStatistics();
  }

  _getMoneyChartData() {
    this._points = this._pointsModel.getPoints();
    const moneyObj = {};
    const typeObj = {};
    const timeObj = {};
    this._points.forEach((point) => {
      if(moneyObj[point.type]) {
        moneyObj[point.type] = moneyObj[point.type] + point.basePrice;
        typeObj[point.type] = typeObj[point.type] + 1;
        timeObj[point.type] = timeObj[point.type] + dayjs(point.endTime).diff(dayjs(point.startTime));
      } else {
        moneyObj[point.type] = point.basePrice;
        typeObj[point.type] = 1;
        timeObj[point.type] = dayjs(point.endTime).diff(dayjs(point.startTime));
      }
    });

    this._getChartData(moneyObj, this._moneyTypes, this._basePrices);
    this._getChartData(typeObj, this._types, this._typesCount);
    this._getChartData(timeObj, this._timeTypes, this._typesDurations);

    // this._typesDurations = this._typesDurations.map((item) => getEventDuration(null, null, item));
  }

  _getChartData(obj, array1, array2) {
    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach((item) => {
      array1.push(item[0]);
      array2.push(item[1]);
    });
  }

  _createCharts() {
    this._getMoneyChartData();
    getMoneyChart(this, this._moneyTypes, this._basePrices);
    getTypeChart(this, this._types, this._typesCount);
    getTimeChart(this, this._timeTypes, this._typesDurations);
  }
}
