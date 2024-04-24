var express = require('express');
var router = express.Router();


router.get("/movies", (req, res) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmJjYjE0YWUxZjRiNDZmZjNiYWVlNTA0MTkzZmYyNCIsInN1YiI6IjY2MjhjYWU4YTEzNTMzMDE2NTE3ZGFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK97PxfRnYRzS2zvIKb-FnHhwVziZQMSxT72W92hBio'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(data => res.json({result: true, movies: data.results}))
      .catch(err => console.error('error:' + err));

})

module.exports = router;
