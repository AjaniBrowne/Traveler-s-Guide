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
   
   
