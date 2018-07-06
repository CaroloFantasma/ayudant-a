const display = document.getElementById('display');
const url = 'https://api.github.com/users/carolofantasma';

const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true) //Sin punto y coma
  request.onload = function() {
    let users = JSON.parse(request.responseText);
    if (request.readyState == 4 && request.status == "200") {
    console.table(users);
    display.innerHTML = information;
  } else {
    console.error(users);
    }
  }
  request.send(null);
}

getJSON(url, response => {
  let informacion = JSON.parse(response);
  console.log(informacion);
})