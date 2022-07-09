
//   fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e2c64eb127544922abc9e8cd2503fbed", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '95a31a0cb5mshec7999ec6d2f812p19a194jsnde5e50058307',
//             'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
//         }
//     };
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
   
   

    fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', options)
    
  function cityBnb (cityEl) {
fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', options)

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


        var searchBNB = document.getElementById('searchBNB');


        searchBNB.addEventListener('click', function (event) {
        
            event.preventDefault();
        
            var input = document.getElementById('cityBnb').value;
            cityBnb(input)
          //console.log(input)
        
        
        })
    }


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
        
