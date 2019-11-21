var post=document.querySelector('.post');
var but=document.querySelector('button');
var search=document.querySelector('#search');
but.addEventListener('click', load);

function load(){
    var contain=search.value;
    var url=`http://www.omdbapi.com/?i=tt3896198&apikey=67c1e8cd&t=${contain}`;
    fetch(url)
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        console.log(data)
            document.querySelector('h1').innerHTML = data.Title;
            document.querySelector('h5').innerHTML = data.Year;
            var poste = document.querySelector('.poste');
            poste.innerHTML = `<img src="${data.Poster}" alt="soryanich">`
    })
}
