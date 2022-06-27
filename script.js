// const bodyParser = require("body-parser")
//
// const app = express()
// app.use(bodyParser.urlencoded({extended: true}))
const apiKey= "6dd11d9eedc30352714b710567053ba5"

function weather(city){
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+apiKey+"&units=metric"

fetch(url)
  .then((response) => response.json())
  .then(function (data){
   if(data.cod === 200){

     const city = data.name;

     const temp = data.main.temp;

     const icon = data.weather[0].icon;

     const des = data.weather[0].description

     const humid = data.main.humidity

     const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"


     document.querySelector(".city").innerText = "Weather in "+city

     document.querySelector(".temp").innerText = temp+ "°C";

    document.querySelector(".icon").src = imageURL

    document.querySelector(".description").innerText = des

    document.querySelector(".humidity").innerText ="Humidity: "+ humid+" %"


    document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + city + "')"
   }
   //  if(data.cod === 404){
   //   var city="error"
   //
   //   document.querySelector(".city").innerText = "City Not Found"
   //
   //   document.querySelector(".temp").innerText = "Error";
   //
   //  document.querySelector(".icon").src = "..."
   //
   //  document.querySelector(".description").innerText = "Error"
   //
   //  document.querySelector(".humidity").innerText = "Error"
   //
   //  document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + city + "')"
   // }

   else{
     var city="error"

     document.querySelector(".city").innerText = "City Not Found"

     document.querySelector(".temp").innerText = "Error";

    document.querySelector(".icon").src = ""

    document.querySelector(".description").innerText = "Error"

    document.querySelector(".humidity").innerText = "Error"

    document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + city + "')"
     console.log("Error please contact the developer. ")
   }
})
}

document.querySelector(".btn").addEventListener("click",function(){
  search()
})

document.addEventListener("keyup",function(event){
  if(event.key === "Enter")
  search()
})


function search(){
  var value=document.querySelector(".search-box").value
  weather(value)
}

weather("Bengaluru")
