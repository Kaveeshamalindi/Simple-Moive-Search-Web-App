let key = "c32e2f58"

function Search() {
    // console.log("Searching...");
    // console.log("Searching for movies....");

    let movieName = document.getElementById("movie").value
    console.log(movieName);

    let url= "https://www.omdbapi.com/?t=" + movieName + "&apikey=" + key
    console.log(url);

    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", url)
    httpRequest.responseType = "json"
    httpRequest.send()

    httpRequest.onload = function() {
        console.log(httpRequest.response)
        let movie = httpRequest.response

        document.getElementById("title").innerHTML = movie.Title
        document.getElementById("year").innerHTML = movie.Year
        document.getElementById("poster").src = movie.Poster
        document.getElementById("plot").innerHTML = movie.Plot
    }
}