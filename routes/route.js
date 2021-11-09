const { request } = require('express');
const express = require('express');

const router = express.Router();
const movieName = ['Heathers', 'Europa Report', 'Fellowship of the Ring', 'Silver Linings Playbook']
const movieName2 = [{
    "id":1,
    "name":"Heathers"
  },{
    "id":2,
    "name":"Europa Report"
  },{
    "id":3,
     "name":"Fellowship of the Ring"
  },{ 
     "id":4,
     "name":"Silver Linings Playbook"
  }]

// Please comment out the API which is not in use.

//1. Create an endpoint for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
router.get('/movies', function (req, res) {
    res.send(movieName)
});

//2. Create an endpoint GET /movies/indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1)
router.get('/movies/:index', function (req, res) {
    let value = req.params.index
    res.send(movieName[value])
});

//3. Handle a scenario where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index
router.get('/movies/:index', function (req, res) {
    let movieIndex = movieName.length
    let reqIndex = req.params.index 
    let value = reqIndex <= movieIndex ? movieName[reqIndex-1] : 'there are only 4 movies in the file'
    res.send(value)
});

//4. Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. 
//Each movie object should have values - id, name. Return the entire array in this api’s response
router.get('/movies', function (req, res) {
    res.send(movieName2)
});

// 5. Write api GET /films/:filmId where filmId is the value received in request path params. 
// Use this value to return a movie object with this id. In case there is no such movie present return a suitable message in the response body. 
// Example for a request GET /films/3 should return the movie object
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

router.get('/movies/:filmId', function (req, res) {
    const result = movieName2.filter(x => {
        return x.id == req.params.filmId
    })
    if(result.length === 0){
        res.send('there is no movie with this ID')
    } else res.send(result)
}); 

module.exports = router;