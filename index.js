function myFunction(name, year, text, color) {
  var item = document.createElement("div");
  item.innerHTML = `
  <div class="card m-2" style="width: 18rem">
  <div class="card-header" id="feature"><b>Name: </b>${name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="anitem"><b>Year: </b>${year}</li>
    <li class="list-group-item" id="seconditem"><b>Color Code: </b>${color}</li>
    <li class="list-group-item" id="thirditem"><b>Text: </b><span  style="color:${color}">${text}</span></li>
  </ul>
  </div>
  `;
  document.querySelector(".root").appendChild(item);
}
count = 0;
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
const time = document.querySelector('#time')
time.textContent = `Time: ${h}hr : ${m}min`
function counter() {
  const counting = document.querySelector("#counting");
  count = count + 1;
  counting.textContent = count;

  fetch(`https://reqres.in/api/products/${count}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      console.log(data.support);
      name = data.data.name;
      color = data.data.color;
      year = data.data.year;
      text = data.support.text;
      myFunction(name, year, text, color);
    });
}
