var place = document.getElementById('city')
var bnbbtn = document.getElementById('searchBNB')
var requestOptions = {
    method: 'GET',
  };

  fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e2c64eb127544922abc9e8cd2503fbed", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
   
    const information = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4d6bc9b41msh312d9c1f7ef35a0p11686fjsn1be2f214b1a1',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };

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
            
            renderEl.append(card);


        });
 }
function inputcity() {
    const information = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c1ce3ad0b5msh9cfdca5eeaa64ccp1932e1jsn6be0c2068f56',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
    var initial = 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query='
    var country = '&country=USA'
    var url = initial + place.value + country
    fetch(url, information)
    .then(response => response.json())
    .then(result => {console.log(result)
        const id = result.data[0].id
        getProperty(id)
    })
    .catch(error => console.log('error', error));
    
}
function getProperty(identifier) {
    const information2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3cdbe490ddmsh751dfcb32382a4fp1f05c7jsn32c79cfcfe7a',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
    fetch('https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=' + identifier +'&totalRecords=10&currency=USD&adults=1', information2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
bnbbtn.addEventListener('click', inputcity)
