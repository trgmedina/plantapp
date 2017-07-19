// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {

  getPlants: function() {
    return axios.get("/api");
  },

  // Takes in an argument for what to post to the database
  savePlant: function(plantData) {
     return axios.get("/user").then(function(results){
            console.log("user id is here",results.data._id);
            var id = results.data._id;
            var newPlant = {
                  plant: plantData,
                  userId: id
            }
            return axios.post("/userPlant", newPlant);
     });
  },
  // Get the array of plants names in the plants collection and use it for autocomplete
  getPlantsNames: function() {
     return axios.get("/api").then(function(results){
     	 var plantsNames = [];
    	    for(var i=0; i < results.data.length; i++){
    	    	plantsNames.push(results.data[i].name);
    	    }
    	   console.log(plantsNames); 
    	   return plantsNames;
       });
    },

  getUserPlants: function() {
    var displayUserPlants = [];

    return axios.get("/user/plants").then(function(results){
      var data = results.data;

      // loop through results from DB 
      for (var i = 0; i < data.length; i++) {
          var plantData = {
            name: data[i].name,
            description: data[i].description,
            origin: data[i].origin,
            sunlightAmt: data[i].sunlightAmt,
            waterSchedule: data[i].waterSchedule,
            imageURL: data[i].imageURL,
            reminders: {
              reminderType: data[i].reminders.reminderType,
              days: data[i].reminders.days,
              frequency: data[i].reminders.frequency
            }
          }

          displayUserPlants.push(plantData);
      }

      return displayUserPlants;
    });

  searchPlant: function(plantName){
    //find the plant being passed from addPlant search input
    var searchPlant = plantName;
      return axios.get("/api").then(function(results){
         for(var j=0; j < results.data.length; j++){
          if (results.data[j].name = searchPlant){
             return results.data[j]; 
             break; 
            }
          }     
      }); 
>>>>>>> master
  }

};



