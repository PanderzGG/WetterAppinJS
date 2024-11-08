
import { stadtanzeige } from './stadtanzeige.js';


export class createStadt {

    constructor(){
        this.curstadt = new stadtanzeige();
        this.defaultStadtList = [   'Berlin', 'Heinsberg', 'Hamburg', 'München',
                                'Köln', 'Düsseldorf', 'Dortmund', 'Essen', 
                                'Bremen', 'Hannover', 'Duisburg', 'Leipzig',
                                'Dresden', 'Nürnberg', 'Darmstadt', 'Kiel',
                                'Kassel', 'Erfurt', 'Saarbrücken', 'Stuttgart',
                                'Frankfurt', 'Wiesbaden', 'Mainz', 'Potsdam',
                                'Schwerin', 'Magdeburg', 'Halle', 'Kiel',
                                'Flensburg', 'Lübeck', 'Rostock', 'Stralsund',];
    }

    async defaultStadt(){
        let stadt = this.defaultStadtList[Math.floor(Math.random() * this.defaultStadtList.length)];
        console.log(stadt);
    }

    async postStadt(){
        try {
            const cityLocationData = await curstadt.getCityLocation(inputSearch.value);
            if (cityLocationData && cityLocationData.results && cityLocationData.results.length > 0) {
                const latitude = cityLocationData.results[0].latitude;
                const longitude = cityLocationData.results[0].longitude;
                console.log('Koordinaten:', latitude, longitude);

                // Wetterdaten mit den abgerufenen Koordinaten abrufen
                const data = await curstadt.getCityData(latitude, longitude);

                if (data && data.current_weather && data.daily) {
                    // Temperatur anzeigen
                    if (typeof data.current_weather.temperature === 'number') {
                        const temperature = data.current_weather.temperature;
                        curTemp.innerText = `${temperature}°C`;
                        
                        
                    } else {
                        console.error('Ungültige Temperaturdaten:', data);
                        curTemp.innerText = 'Daten nicht verfügbar';
                    }

                    // Sonnenaufgang anzeigen
                    if (Array.isArray(data.daily.sunrise) && data.daily.sunrise.length > 0) {
                        const sunriseTime = new Date(data.daily.sunrise[0]).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
                        sunrisetime.innerText = `${sunriseTime} Uhr`;
                    } else {
                        console.error('Ungültige Sonnenaufgangsdaten:', data);
                        sunrisetime.innerText = 'Daten nicht verfügbar';
                    }

                    // Sonnenuntergang anzeigen
                    if (Array.isArray(data.daily.sunset) && data.daily.sunset.length > 0) {
                        const sunsetTime = new Date(data.daily.sunset[0]).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
                        sunsettime.innerText = `${sunsetTime} Uhr`;
                    } else {
                        console.error('Ungültige Sonnenuntergangsdaten:', data);
                        sunsettime.innerText = 'Daten nicht verfügbar';
                    }

                    // Windgeschwindigkeit anzeigen
                    if (typeof data.current_weather.windspeed === 'number') {
                        windspeed.innerText = `${data.current_weather.windspeed} km/h`;
                    } else {
                        console.error('Ungültige Windgeschwindigkeitsdaten:', data);
                        windspeed.innerText = 'Daten nicht verfügbar';
                    }

                    // Zeit anzeigen
                    if (typeof data.current_weather.time === 'string') {
                        const curTime = new Date(data.current_weather.time).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
                        curtime.innerText = `${curTime} Uhr`;
                    } else {
                        console.error('Ungültige Zeitdaten:', data);
                        curtime.innerText = 'Daten nicht verfügbar';
                    }

                    // Stadtname aktualisieren
                    if (cityLocationData && cityLocationData.results && cityLocationData.results[0]) {
                        stadt.innerText = cityLocationData.results[0].name;
                    } else {
                        console.error('Ungültige Stadtinformationen:', cityLocationData);
                        stadt.innerText = 'Unbekannt';
                    }

                    if (cityLocationData && cityLocationData.results && cityLocationData.results[0]) {
                        locationLabel.innerText = cityLocationData.results[0].admin1;
                    } else {
                        console.error('Ungültige Stadtinformationen:', cityLocationData);
                        locationLabel.innerText = 'Unbekannt';
                    }
                } else {
                    console.error('Ungültige Datenstruktur:', data);
                    curTemp.innerText = 'Daten nicht verfügbar';
                    sunrisetime.innerText = 'Daten nicht verfügbar';
                    sunsettime.innerText = 'Daten nicht verfügbar';
                    windspeed.innerText = 'Daten nicht verfügbar';
                    curtime.innerText = 'Daten nicht verfügbar';
                    stadt.innerText = 'Unbekannt';
                }

            } else {
                console.error('Keine Ergebnisse von getCityLocation');
                stadt.innerText = 'Stadt nicht gefunden';
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    }



}