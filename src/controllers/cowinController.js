const axios = require("axios");




const getWeatherReport = async function (req, res) {
  try {
    let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
    let citiesWithTemp = []
      for (let i=0; i<cities.length; i++){

        let options = {
          method: "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=945041d8a7df0ad6c8202408cca1a291`,
        };
        const x = await axios(options);
        citiesWithTemp.push({city:cities[i], temp:x.data.main.temp})
      }

     function compare(a, b) {
      const tempA = a.temp
      const tempB = b.temp
    
      let comparison = 0;
      if (tempA > tempB) {
        comparison = -1;
      } else if (tempA < tempB) {
        comparison = 1;
      }
      return comparison;
    }

    citiesWithTempSorted = citiesWithTemp.sort(compare)

    console.log(citiesWithTempSorted);
    res.status(200).send({ msg: "Successfully fetched data", data: citiesWithTempSorted});

      
  }
    catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
    }
}


module.exports.getWeatherReport = getWeatherReport;