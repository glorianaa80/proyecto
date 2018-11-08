// Crea el request.
const request = new XMLHttpRequest();
 request.innerHTML = '';
// Creacion de variables
const boton = document.getElementById('btn');

let response;

function addelement() {
  let element = document.getElementById('space').value;
  console.log(element);
  element = parseInt(element);
 
  document.querySelector('h1').innerHTML = response[element].title;
  document.querySelector('h4').innerHTML = response[element].director;
  document.querySelector('#director').innerHTML = response[element].producer;
  document.querySelector('#release').innerHTML = response[element].release_date;
  document.querySelector('#score').innerHTML = response[element].rt_score;
  document.querySelector('#description').innerHTML = response[element].description;

}
// API de Films
// Registra el manejador de eventos.

request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  // Variables que contiene la informacion de la API
  const itemResponseName = response.title;
  const itemResponsePro = response.producer;
  const itemResponseDi = response.director;
  const itemResponseRelease = response.release_date;
  const itemResponseScore = response.rt_score;
  const itemResponse = response.description;
  // variable que crea el elemento HTML
  const container = document.getElementById('informacion');
  const listItemName = document.createElement('h1');
  const listItemPro = document.createElement('p');
  listItemPro.setAttribute('id' , 'director')
  const listItemDi = document.createElement('h4');
  const listItemRelease = document.createElement('p');
  listItemRelease.setAttribute('id' , 'release')
  const listItemScore = document.createElement('p');
  listItemScore.setAttribute('id' , 'score')
  const listItem = document.createElement('p');
  listItem.setAttribute('id' , 'description')
  // Agrega la informacion al elemento HTML
  listItemName.innerHTML = itemResponseName;
  listItemDi.innerHTML = itemResponseDi;
  listItemPro.innerHTML = itemResponsePro;
  listItemRelease.innerHTML = itemResponseRelease;
  listItemScore.innerHTML = itemResponseScore;
  listItem.innerHTML = itemResponse;
  // Agrega la informacion al elemento la pagina del navegador
  container.appendChild(listItemName);
  container.appendChild(listItemDi);
  container.appendChild(listItemPro);
  container.appendChild(listItemRelease);
  container.appendChild(listItemScore);
  container.appendChild(listItem);
});



boton.onclick = addelement;
// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', 'https://ghibliapi.herokuapp.com/films/');
// newRequest.open('GET', 'https://ghibliapi.herokuapp.com/people/');

// Envía el request.
request.send();
// newRequest.send();
