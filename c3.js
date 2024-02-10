
    const Location = document.getElementById("Location")
    const Temprature = document.getElementById("Temprature")
    const Condition = document.getElementById("Condition")
    const Humidity = document.getElementById("Humidity")
    const symbol = document.getElementById("symbol")


const searchbutton = document.querySelector(".searchbutton")

    searchbutton.addEventListener('click',finout)
    searchbutton.addEventListener('keydown',function (event){
        if(event.key === 'Enter'){
            finout()
        }
    });

        function finout(){
            const inpuoa = document.getElementById("inputcity")
        city = inpuoa.value

        if(city.trim() === ''){
            alert("Please enter the Location")
            return;
        }

        const apikey = '88feed6335189983bef9c2e3a08f1dec';

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    
    fetch(apiurl)
        .then((response) =>{
            return response.json()
        })
        .then((data) =>{
            displayweather(data)
        })
        .catch((error) =>{
            console.error('error',error)
            alert('Error Occured')
        })
    }

        
        
    const weatherIcons = {
        "hot": "☀️",
        "clouds": "☁️",
        "rain": "🌧️",
        "cold": "❄️",
        "spring" : "🌸"
    };
    function displayweather(data){
        if(data.cod == '404'){
            alert("Error Occured while fetching data")
            return;
        }
        Fahrenheit = data.main.temp
        Celsius = Fahrenheit - 273.15
        Location.textContent = data.name
        Condition.textContent = data.weather[0].description
        Humidity.textContent = data.main.humidity
        if(Celsius > 37){
            Temprature.textContent = `${Celsius.toFixed(2)} ${weatherIcons["hot"]}`     
           }
        else if(Celsius < 14){
            Temprature.textContent = `${Celsius.toFixed(2)}  ${weatherIcons["hot"]}`     
           }
        else if(Celsius > 24 && Celsius < 34){
            Temprature.textContent = `${Celsius.toFixed(2)}  ${weatherIcons["hot"]}`    
            }

            document.getElementById("inputcity").value = ''
        outputdata.style.display = 'block';

        
        }
    
    