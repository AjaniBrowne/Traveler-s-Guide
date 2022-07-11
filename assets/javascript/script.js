var place = document.getElementById('city')
var bnbbtn = document.getElementById('searchBNB')
var requestOptions = {
    method: 'GET',
  };

  fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e2c64eb127544922abc9e8cd2503fbed", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5eb859401msh2d369e18bd60dd2p1a12f2jsn5f6a801bcc56',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
   
    const information = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4d6bc9b41msh312d9c1f7ef35a0p11686fjsn1be2f214b1a1',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
    fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', information)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err)); 
   
    //removed old function//
        var savedAirbnb = localStorage.getItem("airbnb") || [];
if (savedAirbnb.length > 0) {
    airBnb = savedAirbnb;
}

 function currentAirbnb (airBnb) {
     var url= 'https://airbnb19.p.rapidapi.com/api/v1/getCategory'

    fetch(url)
    .then(res => res.json())
        .then((data) => {
            console.log(data)
            var card = document.createElement("div");
            var airBnbName = document.createElement("h3");
            var cityEl = document.createElement("p");


            airBnbName.textContent = data.name;
            cityEl.textContent = "Location: " + data.main;

            card.append(airBnbName, cityEl);

            var renderEl = document.getElementById("currentRender");
            console.log(card)
            renderEl.append(card);


        });
 }
 function inputcity() {
    var initial = 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query='
    var country = '&country=USA'
    var url = initial + place.value + country
    fetch(url, information)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
bnbbtn.addEventListener('click', inputcity)
