// stadtanzeige.js
export class stadtanzeige {
    constructor() {
        this.curTemp = 0; // Aktuelle Temperatur wird initialisiert
        this.city = ''; // Name der Stadt wird initialisiert
        this.postcode = 0; // Postleitzahl wird initialisiert
    }


    async getCityLocation(city) {
        if (typeof city !== 'string') {
            console.error('Ungültige Werte für Stadt oder Postleitzahl');
            return Promise.reject('Ungültige Werte für Stadt oder Postleitzahl');
        }

        const targetUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=de&format=json`;

        try {
            const response = await fetch(targetUrl);

            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht OK: ' + response.statusText);
            }
            
            const cityData = await response.json();
            return cityData;
        } catch (error) { 
            console.error('Fetch-Fehler:', error);
            throw error;
        }
    }

    // Methode zum Abrufen der Wetterdaten basierend auf Latitude und Longitude
    async getCityData(latitude, longitude) {
        // Überprüfen, ob die übergebenen Werte Zahlen sind
        if (typeof latitude !== 'number' || typeof longitude !== 'number') {
            console.error('Ungültige Werte für Breite oder Länge');
            return Promise.reject('Ungültige Werte für Breite oder Länge');
        }

        // URL für die Open-Meteo-API mit den entsprechenden Parametern
        const targetUrl = `https://api.open-meteo.com/v1/forecast` +
                          `?latitude=${latitude}&longitude=${longitude}` +
                          `&current_weather=true` +
                          `&hourly=temperature_2m,is_day,rain` +
                          `&daily=sunrise,sunset` +
                          `&timezone=Europe/Berlin` +
                          `&forecast_days=1`;

        try {
            // API Datenabruf
            const response = await fetch(targetUrl);

            // Anfrage erfolgreich?
            if (!response.ok){
                throw new Error('Netzwerk-Antwort war nicht OK: ' + response.statusText);
            }

            // Konvertieren der Antwort zu einer JSON

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch-Fehler:', error);
            throw error;
        }
    }
    
}