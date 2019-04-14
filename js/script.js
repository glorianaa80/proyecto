// Crea el request.
const request = new XMLHttpRequest();
// Creacion de variables.
const boton = document.getElementById('btn');

let response;
let element;

// Funcion para que el boton del buscador funcione
function addelement() {
  element = document.getElementById('space').value;
  console.log(element);
  element = parseInt(element);
  //  Elementos que saldran cunado se presione el boton.   
  // Variables que contiene la informacion de la API.
  document.querySelector('h1').innerHTML = response[element].title;
  document.querySelector('h4').innerHTML = `Director: ${response[element].director}`;
  document.querySelector('#producer').innerHTML = `Producer: ${response[element].producer}`;
  document.querySelector('#release').innerHTML = `Release Date: ${response[element].release_date}`;
  document.querySelector('#score').innerHTML = `Score: ${response[element].rt_score}`;
  document.querySelector('#description').innerHTML = response[element].description;
}

// API de Films
// Registra el manejador de eventos.

request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  // Informacion que saltra al cargar la página.
  const itemResponseName = response[0].title;
  const itemResponsePro = response[0].producer;
  const itemResponseDi = response[0].director;
  const itemResponseRelease = response[0].release_date;
  const itemResponseScore = response[0].rt_score;
  const itemResponse = response[0].description;

  // variable que crea el elemento HTML.
  const container = document.getElementById('informacion');
  const listItemName = document.createElement('h1');
  const listItemDi = document.createElement('h4');
  const listItemPro = document.createElement('p');
  const listItemRelease = document.createElement('p');
  const listItemScore = document.createElement('p');
  const listItem = document.createElement('p');
  // Se crean id para identificar a los P
  listItemPro.setAttribute('id', 'producer');
  listItemRelease.setAttribute('id', 'release');
  listItemScore.setAttribute('id', 'score');
  listItem.setAttribute('id', 'description');
  // Agrega la informacion al elemento HTML
  listItemName.innerHTML = itemResponseName;
  listItemDi.innerHTML = `Director: ${itemResponseDi}`;
  listItemPro.innerHTML = `Producer: ${itemResponsePro}`;
  listItemRelease.innerHTML = `Release Date: ${itemResponseRelease}`;
  listItemScore.innerHTML = `Score: ${itemResponseScore}`;
  listItem.innerHTML = itemResponse;
  // Agrega la informacion al elemento la pagina del navegador
  container.appendChild(listItemName);
  container.appendChild(listItemDi);
  container.appendChild(listItemPro);
  container.appendChild(listItemRelease);
  container.appendChild(listItemScore);
  container.appendChild(listItem);
});

// Al presionar el boron llama a la Funcion ADDELEMENT para ejecutarla
boton.onclick = addelement;

// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', 'https://ghibliapi.herokuapp.com/films/');
// newRequest.open('GET', 'https://ghibliapi.herokuapp.com/people/');

// Envía el request.
request.send();
// newRequest.send();
