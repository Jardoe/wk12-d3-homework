const beersArray = [];

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://api.punkapi.com/v2/beers'
  makeRequest(url, requestComplete);

});


const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
};

const requestComplete = function () {
  if (this.status !==200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  beers.forEach((beer) => {
    beersArray.push(beer)
  });
  console.log(beersArray);
  populateList()
};

const populateList = function () {
  beersArray.forEach((beer) => {
    render(beer);
  })
}

const render = function (beer) {
  const ul = document.querySelector('#unordered_list');
  const li = document.createElement('li');
  li.textContent = beer.name;
  addImage(beer);
  ul.appendChild(li);
}

const addImage = function (beer) {
  const ul = document.querySelector('#unordered_list');
  const img = document.createElement('img');
  img.src = beer.image_url;
  ul.appendChild(img)
}
