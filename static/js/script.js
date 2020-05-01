//alert("Hello");
//console.log("hello");

function ageInDays() {
  let brithYear = prompt("what year you born good friend?")
  let ageInDayss = (2020 - brithYear) * 365;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old.');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer)
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function genarateCat() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src = "https://gifimage.net/wp-content/uploads/2018/04/kedi-gif-tumblr.gif"
  div.appendChild(image);
}