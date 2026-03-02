let ville = 'Antananarivo'

function recevoirTemperature(ville);
const url = 'https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'
let Requete  new XMLHttpRequest();
requete.open('GET', url);
requete.reponseType = 'jason' ;
requete.send(); 

requete.onload = function() {
	if (requete.readystate === XMLHttpRequest.DONE ){
		if(requete.status === 200) {
			let reponse = requete.reponse;
			let temperature  = reponse.main.temp;
			let ville reponse.name
			document.querySelector('#temperature_label').textContent=temperature;
			document.querySelector('ville').textContent=Ville;	
		} 

		else {
			alert('un pronleme est interview, merci de revenir plus tard.')
		}
	}
} 