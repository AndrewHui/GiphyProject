var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.query.queryKey)

  axios.get(`http://api.giphy.com/v1/gifs/search?api_key==${req.query.queryKey}`)
  .then((response) => {
    // console.log("response", response.data);
    res.send(response.data.data);
  })
  .catch(err => {
    console.log(err);
  })
  

});

module.exports = router;
