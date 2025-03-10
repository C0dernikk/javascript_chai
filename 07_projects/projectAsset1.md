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