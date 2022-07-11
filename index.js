'use strict';

const card = document.querySelector('.card');
const cardQuote = document.querySelector('.card__quote');
const cardAuthor = document.querySelector('.card__author');

// Animation background
const animationBackground = document.createElement('ul');
animationBackground.classList.add('animation__background');
for (let i = 1; i <= 10; i++) {
  let animationPoint = document.createElement('li');
  animationPoint.classList.add(`point`, `point-${i}`);
  animationBackground.appendChild(animationPoint);
}
document.body.append(animationBackground);

const getQuotes = async function () {
  const getData = await fetch(
    'https://goquotes-api.herokuapp.com/api/v1/random?count=30'
  )
    .then((res) => res.json())
    .then(({ quotes }) => {
      cardQuote.textContent = '،،' + quotes[0].text;
      cardAuthor.textContent = 'ــ' + quotes[0].author;
    });
};
getQuotes();
