import { getRandomInt, getRandomArrayElement, getRandomArrayLength } from './random-generator.js';

const pointType = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Transport',
  'Drive',
  'Flight',
  'CheckIn',
  'Sightseeing',
  'Restaurant'
];

const cities = [
  'Moscow',
  'Sunja',
  'London',
  'New-York',
  'Amsterdam',
  'Paris',
  'Madrid'
];

export const offers = [
  {id: 1, text: 'Order Uber', price: 20, type: getRandomArrayElement(pointType)},
  {id: 2, text: 'Add luggage', price: 50},
  {id: 3, text: 'Switch to comfort', price: 80},
  {id: 4, text: 'Rent a car', price: 200},
  {id: 5, text: 'Add breakfast', price: 50},
  {id: 6, text: 'Lunch in city', price: 30},
  {id: 7, text: 'Book tickets', price: 40},
];

const decriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

const startTime = [
  '2022-02-02T17:36:32.554Z',
  '2021-12-29T11:44:32.554Z',
  '2022-01-04T01:01:32.554Z',
  '2022-01-10T22:24:32.554Z',
  '2022-01-12T22:20:32.554Z',
  '2022-01-01T22:20:32.554Z',
  '2021-11-30T17:36:32.554Z',
  '2021-07-30T17:36:32.554Z',
  '2022-01-14T14:20:32.554Z'
];

const endTime = [
  '2022-02-02T18:46:32.554Z',
  '2021-12-29T12:44:32.554Z',
  '2022-01-04T02:01:32.554Z',
  '2022-01-10T22:54:32.554Z',
  '2022-01-12T22:20:32.554Z',
  '2022-01-01T22:55:32.554Z',
  '2021-11-30T19:20:32.554Z',
  '2021-07-30T18:15:32.554Z',
  '2022-02-16T16:20:32.554Z'
];

const getRandomPoint = () => {
  const randomIndex = getRandomInt(0, startTime.length - 1);
  return ({
    basePrice: getRandomInt(5, 20) * 10,
    type: getRandomArrayElement(pointType),
    city: getRandomArrayElement(cities),
    offers: getRandomArrayLength(offers, 0, 4).map((item) => item.id),
    place: {
      decription: getRandomArrayLength(decriptions, 0, decriptions.length - 1),
      photo: `http://picsum.photos/248/152?r=${Math.random()}`
    },
    startTime: startTime[randomIndex],
    endTime: endTime[randomIndex],
    isFavorite: Math.random() > 0.5,
  });
};

export const getRandomPoints = ((amount) => {
  const points = [];
  for(let i = 0; i < amount; i++) {
    points.push(getRandomPoint());
  }
  return points;
});
