
const form =document.querySelector ('#form');
const container = document.querySelector('.container')

form.addEventListener('submit', async function(e){
    e.preventDefault()
    const searchTerm = form.elements.input.value;
    const res = await axios.get (` http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    fetchImage(res.data);
    form.elements.input.value ='';
})

//defining fetch image fuction
const fetchImage = (shows) => {
 for (let show of shows ){
     if (show.show.image){
    const img = document.createElement('IMG');
    img.src = show.show.image.medium;
    container.append(img);
 }
}
}