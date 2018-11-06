/**
 * Obtiene una lista (parcial) de personajes de Rick and Morty.
 *
 */

// Crea el request.
const request = new XMLHttpRequest();

// API de Films
// Registra el manejador de eventos.
request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  // Variables que contiene la informacion de la API
  const itemResponseName = response[19].title;
  const itemResponsePro = response[19].producer;
  const itemResponse = response[19].description;
  
  // variable que crea el elemento HTML
  const container = document.getElementById('informacion');
  const listItem = document.createElement('p');
  const listItemName = document.createElement('h1');
  const listItemPro = document.createElement('h3');

  // Agrega la informacion al elemento HTML
  listItem.innerHTML = itemResponse;
  listItemName.innerHTML = itemResponseName;
  listItemPro.innerHTML = itemResponsePro;

  // Agrega la informacion al elemento la pagina del navegador
  container.appendChild(listItemName);
  container.appendChild(listItemPro);
  container.appendChild(listItem);
  
});

// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', 'https://ghibliapi.herokuapp.com/films/');
// newRequest.open('GET', 'https://ghibliapi.herokuapp.com/people/');

// Envía el request.
request.send();
// newRequest.send();
