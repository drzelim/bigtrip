import { getRandomInt, getRandomArrayElement, getRandomArrayLength } from './random-generator.js';
import { getOffersInfo } from '../view/points.js';

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

const days = [
  'MAR 20',
  'MAR 23',
  'MAR 24',
  'MAR 29',
  'MAR 30',
  'APR 02'
];

const startTime = [
  '10:30',
  '11:00',
  '12:00',
  '14:25',
  '21:00'
];

const endTime = [
  '11:30',
  '12:00',
  '12:30',
  '15:00',
  '21:45'
];

const getRandomPoint = () => {
  const randomIndex = getRandomInt(0, startTime.length - 1);
  return ({
    type: getRandomArrayElement(pointType),
    city: getRandomArrayElement(cities),
    offers: getRandomArrayLength(offers, 0, 4).map((item) => item.id),
    place: {
      decription: getRandomArrayLength(decriptions, 1, decriptions.length - 1),
      photo: `http://picsum.photos/248/152?r=${Math.random()}`
    },
    eventDate: new Date().toISOString(),
    day: getRandomArrayElement(days),
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
