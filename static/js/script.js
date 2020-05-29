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

function rpsGame(yourChoice) {
  console.log(yourChoice);
  let humanChoice, botChoice;
  // humanChoice = yourChoice.id;
  // botChoice = numberToChoice(randToRpsInt());
  // results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
  // message = finalMessage(results);// {'message': 'you won!' , 'color':, 'grem'} 
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

//function that choce randamly a number (rock, paper and sisor)
function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {
      
    }
  }
}