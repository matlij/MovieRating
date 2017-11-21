
function renderMovie(movie){
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("movieDescription").innerText = movie.description;
    
    let actorList = "";
    for(let actors in movie.actors){
        actorList += "<li>" + movie.actors[actors] + "</li>";
    }
    document.getElementById("actorList").innerHTML = actorList;
}

renderMovie(movieData);