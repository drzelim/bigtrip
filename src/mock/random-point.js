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

const offers = [
  {id: 1, text: 'Order Uber', price: 20},
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

const placeInformation = {
  decription: decriptions[0],
  photo: `http://picsum.photos/248/152?r=${Math.random()}`
};

const getRandomPoint = () => ({
  type: getRandomArrayElement(pointType),
  city: getRandomArrayElement(cities),
  offers: getRandomArrayLength(offers, 0, 4).slice().map((item) => item.id)
});

console.log(getRandomPoint());
