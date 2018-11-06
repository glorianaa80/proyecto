/**
 * Obtiene una lista (parcial) de personajes de Rick and Morty.
 *
 */

// Crea el request.
const request = new XMLHttpRequest();
const espacio = document.getElementById('space');
const boton = document.getElementById('btn');

// API de Films
// Registra el manejador de eventos.
request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  // Variables que contiene la informacion de la API
  const itemResponseName = response[0].title;
  const itemResponsePro = response[0].producer;
  const itemResponseRelease = response[0].release_date;
  const itemResponseScore = response[0].rt_score;
  const itemResponse = response[0].description;
  
  // variable que crea el elemento HTML
  const container = document.getElementById('informacion');
  const listItemName = document.createElement('h1');
  const listItemPro = document.createElement('h4');
  const listItemRelease = document.createElement('p');
  const listItemScore = document.createElement('p');
  const listItem = document.createElement('p');
  // Agrega la informacion al elemento HTML
  listItemName.innerHTML = itemResponseName;
  listItemPro.innerHTML = itemResponsePro;
  listItemRelease.innerHTML = `Fecha de lanzamiento: ${itemResponseRelease}`;
  listItemScore.innerHTML = `  Puntuación: ${itemResponseScore }`;
  listItem.innerHTML = itemResponse;

  // Agrega la informacion al elemento la pagina del navegador
  container.appendChild(listItemName);
  container.appendChild(listItemPro);
  container.appendChild(listItemRelease);
  container.appendChild(listItemScore);
  container.appendChild(listItem);
});

// boton.onclick = ;
// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', 'https://ghibliapi.herokuapp.com/films/');
// newRequest.open('GET', 'https://ghibliapi.herokuapp.com/people/');

// Envía el request.
request.send();
// newRequest.send();
