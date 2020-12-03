
const form =document.querySelector ('#form');

form.addEventListener('submit', function(e){
    const searchTerm = form.elements.input.value;
    console.log(axios.get (` http://api.tvmaze.com/search/shows?q=${searchTerm}`))
    e.preventDefault()
})