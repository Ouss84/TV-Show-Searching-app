const userInput = document.querySelector('#user-input');
const form =document.querySelector ('#form');

form.addEventListener('submit', function(e){
    console.log('Hi')
    e.preventDefault()
})