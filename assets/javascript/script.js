var place = document.getElementById('city')
var bnbbtn = document.getElementById('searchBNB')
var requestOptions = {
    method: 'GET',
  };

  fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e2c64eb127544922abc9e8cd2503fbed", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

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
 const information = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ff9f951admshfb38f7a93a9fe48p1ca0fbjsncd344fb95880',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
function inputcity() {
    
    var initial = 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query='
    var country = '&country=USA'
    var url = initial + place.value + country
    fetch(url, information)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const timer = ms => new Promise(res => setTimeout(res, ms))

        async function load () { 
        for (var i = 0; i < result.data.length; i++) {
            const id = result.data[i].id;
            await timer(1500);
            getProperty(id) 
        }
        }
        load();
    })
    
    .catch(error => console.log('error', error));
    
}
function getProperty(identifier) {
    fetch('https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=' + identifier +'&totalRecords=10&currency=USD&adults=1', information)
	.then(response => response.json())
	.then(result => {console.log(result)
    const card = document.createElement('div')
    const cardImage = document.createElement('div')
    const cardFigure = document.createElement('figure')
    const houseImg = document.createElement('img')
    const cardContent = document.createElement('div')
    const media = document.createElement('div')
    const mediaContent = document.createElement('div')
    const header = document.createElement('p')
    const subtitle = document.createElement('p')
    const content = document.createElement('div')
    const list = document.createElement('ul')
    const list1 = document.createElement('li')
    const list2 = document.createElement('li')
    
    card.classList.add('card')
    cardImage.classList.add('card-image')
    cardFigure.classList.add('image', 'is-4by3', 'no-background')
    cardContent.classList.add('card-content', 'no-background')
    media.classList.add('media')
    mediaContent.classList.add('media-content')
    header.classList.add('title', 'no-background')
    subtitle.classList.add('subtitle', 'is-6')
    content.classList.add('content', 'no-background')
    list.classList.add('no-background')
    list1.classList.add('no-background')
    list2.classList.add('no-background')
    houseImg.classList.add('no-background')

    header.textContent = result.data[0].title
    subtitle.textContent = result.data[0].accessibilityLabel
    houseImg.setAttribute('src', result.data[0].images[0])
    list1.textContent = 'Beds: ' + result.data[0].beds
    list2.textContent = 'Bathrooms: ' + result.data[0].bathrooms

    document.getElementById('main').appendChild(card).appendChild(cardImage).appendChild(cardFigure).appendChild(houseImg)
    card.appendChild(cardContent).appendChild(media).appendChild(mediaContent).appendChild(header)
    mediaContent.appendChild(subtitle)
    cardContent.appendChild(content).appendChild(list).appendChild(list1)
    list.appendChild(list2)
    })

    .catch(err => console.error(err));
}
bnbbtn.addEventListener('click', inputcity)
