let temp = document.querySelector("#tem")
let fel  = document.querySelector("#feels")
let humd = document.querySelector("#hum")
let windkph = document.querySelector("#wind")

async function Showwather(event) {
    try {
        event.preventDefault();

        temp.innerHTML = "loading....";

        const city = document.querySelector("#inp").value

        const rep = await axios(
            `https://api.weatherapi.com/v1/current.json?key=b8d104058063410da03163641261309&q=${city}`

       );
       console.log(rep);
       

      temp.innerHTML ="Temprature: " + rep.data.current.temp_c;
      fel.innerHTML = "feels_like: " + rep.data.current.feelslike_c;
      humd.innerHTML = "Humdity: " + rep.data.current.humidity;
      windkph.innerHTML = "Wind: " + rep.data.current.will_it_rain
     }
      catch (err) {
        console.log(err.response.data.error.message);


    }


}
