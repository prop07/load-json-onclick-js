function myFunction(name, year, url, text) {
  var item = document.createElement("div");
  item.innerHTML = `
  <div class="card m-2" style="width: 18rem">
  <div class="card-header" id="feature"><b>Name: </b>${name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="anitem"><b>Year: </b>${year}</li>
    <li class="list-group-item" id="seconditem"><b>Url: </b>${url}</li>
    <li class="list-group-item" id="thirditem"><b>Text: </b>${text}</li>
  </ul>
  </div>
  `;
  document.querySelector("nav").appendChild(item);
}
count = 0;
function counter() {
  count = count + 1;
  fetch(`https://reqres.in/api/products/${count}`)
    .then((response) => response.json())
    .then((data) => {
      name = data.data.name;
      year = data.data.year;
      url = data.support.url;
      text = data.support.text;
      myFunction(name, year, url, text);
    });
}
