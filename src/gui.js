import { blaender } from './blaender.js'; 
import { stadtanzeige } from './stadtanzeige.js';
import { createStadt } from './createstadt.js';

export class gui {
    constructor(titel){
        this.titel = titel;
        this.blaender = new blaender();
        this.stadtanzeige = new stadtanzeige();
        this.createStadt = new createStadt();
    }

    async initGUI(){
        // Titel des Tabs
        document.title = this.titel;

        // Header
        let headerDiv = document.createElement('div');
        let headerTitel = document.createElement('h1');

        headerTitel.innerText = 'Das hier wird eine Wetter-App';
        headerDiv.appendChild(headerTitel);

        // Navbar
        let navContext = document.createElement('nav');
        navContext.classList.add('navbar', 'navbar-expand-lg', 'navbar-light');

        // Container
        let navContainer = document.createElement('div');
        navContainer.classList.add('container-fluid');
        navContext.appendChild(navContainer);

        // Nav-Elemente
        let navBrand = document.createElement('a');
        navBrand.classList.add('navbar-brand', 'text-white');
        navBrand.href = '#';
        navBrand.innerText = 'Weathico';
        navContainer.appendChild(navBrand);

        let navToggler = document.createElement('button');
        navToggler.classList.add('navbar-toggler');
        navToggler.type = 'button';
        navToggler.setAttribute('data-bs-toggle', 'collapse');
        navToggler.setAttribute('data-bs-target', '#navbarNav');
        navToggler.setAttribute('aria-controls', 'navbarNav');
        navToggler.setAttribute('aria-expanded', 'false');
        navToggler.setAttribute('aria-label', 'Toggle navigation');
        navContainer.appendChild(navToggler);

        let togglerIcon = document.createElement('span');
        togglerIcon.classList.add('navbar-toggler-icon', 'text-white');
        navToggler.appendChild(togglerIcon);

        let navContent = document.createElement('div');
        navContent.classList.add('collapse', 'navbar-collapse');
        navContent.id = 'navbarSupportedContent';
        navContainer.appendChild(navContent);

        let ulNav = document.createElement('ul');
        ulNav.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');
        navContent.appendChild(ulNav);

        let liHome = document.createElement('li');
        liHome.classList.add('nav-item', 'text-white');
        ulNav.appendChild(liHome);

        let aHome = document.createElement('a');
        aHome.classList.add('nav-link', 'active', 'text-white');
        aHome.ariaCurrent = 'page';
        aHome.href = '#';
        aHome.innerText = 'Home';
        liHome.appendChild(aHome);

        let liBundeslaender = document.createElement('li');
        liBundeslaender.classList.add('nav-item', 'dropdown');
        ulNav.appendChild(liBundeslaender);

        let aBundeslaender = document.createElement('a');
        aBundeslaender.classList.add('nav-link', 'dropdown-toggle', 'text-white');
        aBundeslaender.href = '#';
        aBundeslaender.id = 'navbarDropdown';
        aBundeslaender.role = 'button';
        aBundeslaender.setAttribute('data-bs-toggle', 'dropdown');
        aBundeslaender.ariaHaspopup = 'true';
        aBundeslaender.ariaExpanded = 'false';
        aBundeslaender.innerText = 'Bundesländer';
        liBundeslaender.appendChild(aBundeslaender);

        let ulBundeslaender = document.createElement('ul');
        ulBundeslaender.classList.add('dropdown-menu');
        ulBundeslaender.setAttribute('aria-labelledby', 'navbarDropdown');
        liBundeslaender.appendChild(ulBundeslaender);

        // Funktion die aus einem Array die Bundesländer in ein Dropdown-Menu schreibt
        this.blaender.droplaender(ulBundeslaender);
        
        let foSearch = document.createElement('form');
        foSearch.classList.add('d-flex');
        navContent.appendChild(foSearch);

        let inputSearch = document.createElement('input');
        inputSearch.classList.add('form-control', 'me-2');
        inputSearch.type = "search";
        inputSearch.placeholder = "Stadt Suche...";
        inputSearch.ariaLabel = "Suche";
        foSearch.appendChild(inputSearch);

        let btnSearch = document.createElement('button');
        btnSearch.classList.add('btn', 'btn-outline-success');
        btnSearch.type = "submit";
        btnSearch.innerText = "Suchen";
        foSearch.appendChild(btnSearch);
        
        // Main-container
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('container', 'mt-4');
        
        
        // Header Row
        let headerRow = document.createElement('div');
        headerRow.classList.add('row', 'mb-3');
        mainContainer.appendChild(headerRow);

        let headerCol = document.createElement('div');
        headerCol.classList.add('col');
        headerRow.appendChild(headerCol);
        
        let locationLabel = document.createElement('h2');
        locationLabel.innerText = 'Nordrhein-Westfalen';
        headerCol.appendChild(locationLabel);

        // Weather Info Row
        let weatherRow = document.createElement('div');
        weatherRow.classList.add('row', 'g-3');
        mainContainer.appendChild(weatherRow);

        // Stadt
        let stadtCol = document.createElement('div');
        stadtCol.classList.add('col-md-3');
        weatherRow.appendChild(stadtCol);

        let stadtLabel = document.createElement('label');
        stadtLabel.innerText = 'Stadt:';
        stadtLabel.classList.add('form-label');
        stadtCol.appendChild(stadtLabel);

        let stadt = document.createElement('h3');
        stadt.innerText = '';
        stadt.classList.add('mt-1');
        stadtCol.appendChild(stadt);

        // Zeit der Daten
        let timeCol = document.createElement('div');
        timeCol.classList.add('col-md-3');
        weatherRow.appendChild(timeCol);

        let timelabel = document.createElement('label');
        timelabel.innerText = 'Zeit:';
        timelabel.classList.add('form-label');
        timeCol.appendChild(timelabel);

        let curtime = document.createElement('h3');
        curtime.innerText = 'N/A';
        curtime.classList.add('mt-1');
        timeCol.appendChild(curtime);

        // Temperatur
        let tempCol = document.createElement('div');
        tempCol.classList.add('col-md-3');
        weatherRow.appendChild(tempCol);

        let tempLabel = document.createElement('label');
        tempLabel.innerText = 'Temperatur:';
        tempLabel.classList.add('form-label');
        tempCol.appendChild(tempLabel);

        let curTemp = document.createElement('h3');
        curTemp.innerText = 'N/A';
        curTemp.classList.add('mt-1');
        tempCol.appendChild(curTemp);

        // Windgeschwindigkeit Row
        let windRow = document.createElement('div');
        windRow.classList.add('row', 'mt-4');
        mainContainer.appendChild(windRow);

        // Sonnenaufgang
        let sunriseCol = document.createElement('div');
        sunriseCol.classList.add('col-md-3');
        windRow.appendChild(sunriseCol);

        let sunriseLabel = document.createElement('label');
        sunriseLabel.innerText = 'Sonnenaufgang:';
        sunriseLabel.classList.add('form-label');
        sunriseCol.appendChild(sunriseLabel);

        let sunrisetime = document.createElement('h3');
        sunrisetime.innerText = '';
        sunrisetime.classList.add('mt-1');
        sunriseCol.appendChild(sunrisetime);

        // Sonnenuntergang
        let sunsetCol = document.createElement('div');
        sunsetCol.classList.add('col-md-3');
        windRow.appendChild(sunsetCol);

        let sunsetLabel = document.createElement('label');
        sunsetLabel.innerText = 'Sonnenuntergang:';
        sunsetLabel.classList.add('form-label');
        sunsetCol.appendChild(sunsetLabel);

        let sunsettime = document.createElement('h3');
        sunsettime.innerText = '';
        sunsettime.classList.add('mt-1');
        sunsetCol.appendChild(sunsettime);

        let windCol = document.createElement('div');
        windCol.classList.add('col-md-6');
        windRow.appendChild(windCol);

        let windLabel = document.createElement('label');
        windLabel.innerText = 'Windgeschwindigkeit:';
        windLabel.classList.add('form-label');
        windCol.appendChild(windLabel);

        let windspeed = document.createElement('h3');
        windspeed.innerText = '';
        windspeed.classList.add('mt-1');
        windCol.appendChild(windspeed);

        
        // Event-Listener-Funktion als async deklarieren
        btnSearch.addEventListener('click', async function(event){
            const curstadt = new stadtanzeige();
            
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
        });

        // Elemente zum Dokument hinzufügen
        document.body.appendChild(headerDiv);
        document.body.appendChild(navContext);
        document.body.appendChild(mainContainer);
    }
}