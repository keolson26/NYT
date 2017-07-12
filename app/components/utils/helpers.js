var axios = require("axios");

var nytAPI = "3a780e5379cd493195b406b8e55ec788";

var helpers = {

  findNews: function(userSearch) {

    console.log(userSearch);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + userSearch;

    console.log(url);
    
    return axios.get(url).then(function(response) {

      console.log(response);
      return response.data.response.docs.formatted;
    });

  }

};

module.exports = helpers;
