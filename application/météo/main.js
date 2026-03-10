// Configuration
const API_KEY = "dc8c9152e8adaad0ec8bf635818c0d42"; // À sécuriser en production !
let villeActuelle = "Antananarivo";

// Éléments du DOM
const temperatureLabel = document.querySelector("#temperature_label");
const villeLabel       = document.querySelector("#ville");
const inputVille       = document.querySelector("#inputVille");
const btnRechercher    = document.querySelector("#btnRechercher");
const messageErreur    = document.querySelector("#messageErreur");

// Fonction principale pour récupérer la météo
async function recevoirTemperature(ville) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;
  
  try {
    messageErreur.classList.add("d-none");
    
    const reponse = await fetch(url);
    
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP ${reponse.status}`);
    }
    
    const data = await reponse.json();
    
    if (data.cod && data.cod !== 200) {
      throw new Error(data.message || "Ville non trouvée");
    }
    
    // Mise à jour interface
    temperatureLabel.textContent = Math.round(data.main.temp) + " °C";
    villeLabel.textContent = data.name;
    villeActuelle = data.name;
    
  } catch (erreur) {
    console.error("Erreur météo :", erreur);
    
    temperatureLabel.textContent = "--";
    
    if (erreur.message.includes("not found")) {
      messageErreur.textContent = "Ville non trouvée. Vérifiez l'orthographe.";
    } else {
      messageErreur.textContent = "Une erreur est survenue. Réessayez plus tard.";
    }
    
    messageErreur.classList.remove("d-none");
  }
}

// Fonction de chargement initial / rechargement
function chargerMeteo() {
  recevoirTemperature(villeActuelle);
}

// ──────────────────────────────────────────────
// Écouteurs d'événements
btnRechercher.addEventListener("click", () => {
  const nouvelleVille = inputVille.value.trim();
  if (nouvelleVille) {
    villeActuelle = nouvelleVille;
    chargerMeteo();
    inputVille.value = "";           // on vide le champ
    inputVille.focus();              // on remet le focus
  }
});

// Permettre la touche Entrée
inputVille.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btnRechercher.click();
  }
});

// Démarrage
chargerMeteo();