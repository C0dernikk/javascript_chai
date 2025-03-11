# Projects related to DOM

## Project link
[Click Here](https://dom-project-chaiaurcode.stackblitz.io)
# Solution code
## Project 1

```javascript
const AllButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');

AllButtons.forEach(function (button){
button.addEventListener('click', function(e){
if(e.target.id === 'grey'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'white'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'blue'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'yellow'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'purple'){
  body.style.backgroundColor = e.target.id;
}
})
});


```

## Project 2 
``` javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results')
if(height < 0 || weight < 0 || isNaN(height) || isNaN(weight)){
  result.innerHTML = 'Please enter valid height and weight'
}
else{
  var bmi = ((weight * 10000)/(height*height)).toFixed(2);
  result.innerHTML = bmi
}
let inference;
if(bmi < 18.6){
  inference = `You are under-weight`
}
else if(bmi >= 18.6 && bmi <= 24.9){
  inference = `You have normal weight` 
}
else{
  inference = `You are over weight`
}
const parent_inference = document.querySelector('#weight-guide')
const newElement = document.createElement('p')
newElement.appendChild(document.createTextNode(inference));
parent_inference.appendChild(newElement);

});
```
