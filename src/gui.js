import { blaender } from './blaender.js'; 
import { stadtanzeige } from './stadtanzeige.js';

export class gui {
    constructor(titel){
        this.titel = titel;
        this.blaender = new blaender();
        this.stadtanzeige = new stadtanzeige();
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
        stadt.innerText = 'Heinsberg';
        stadt.classList.add('mt-1');
        stadtCol.appendChild(stadt);

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

        // Sonnenaufgang
        let sunriseCol = document.createElement('div');
        sunriseCol.classList.add('col-md-3');
        weatherRow.appendChild(sunriseCol);

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
        weatherRow.appendChild(sunsetCol);

        let sunsetLabel = document.createElement('label');
        sunsetLabel.innerText = 'Sonnenuntergang:';
        sunsetLabel.classList.add('form-label');
        sunsetCol.appendChild(sunsetLabel);

        let sunsettime = document.createElement('h3');
        sunsettime.innerText = '';
        sunsettime.classList.add('mt-1');
        sunsetCol.appendChild(sunsettime);

        // Windgeschwindigkeit Row
        let windRow = document.createElement('div');
        windRow.classList.add('row', 'mt-4');
        mainContainer.appendChild(windRow);

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

        try {
            // Wetterdaten abrufen und Temperatur anzeigen
            const data = await this.stadtanzeige.getCityData(51.0654, 6.0967);

            // Überprüfen, ob die Daten die erwartete Struktur haben
            if (data && data.current_weather && typeof data.current_weather.temperature === 'number') {
                // Temperatur aus dem JSON extrahieren
                const temperature = data.current_weather.temperature;
                
                // Anzeigeelement aktualisieren
                curTemp.innerText = `${temperature}°C`;
            } else {
                console.error('Ungültige Datenstruktur:', data);
                curTemp.innerText = 'Daten nicht verfügbar';
            }

            // Sonnenaufgang extrahieren und anzeigen
            if (data && data.daily && data.daily.sunrise && data.daily.sunrise.length > 0) {
                const sunrise = data.daily.sunrise[0];
                const sunriseTime = new Date(sunrise).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
                sunrisetime.innerText = `${sunriseTime} Uhr`;
            } else {
                console.error('Ungültige Datenstruktur für Sonnenaufgang:', data);
                sunrisetime.innerText = 'Sonnenaufgang nicht verfügbar';
            }

            // Sonnenuntergang
            if (data && data.daily && data.daily.sunset && data.daily.sunset.length > 0) {
                const sunset = data.daily.sunset[0];
                const sunsetTime = new Date(sunset).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
                sunsettime.innerText = `${sunsetTime} Uhr`;
            } else {
                console.error('Ungültige Datenstruktur für Sonnenuntergang:', data);
                sunsettime.innerText = 'Sonnenuntergang nicht verfügbar';
            }

            // Windgeschwindigkeit
            if (data && data.current_weather && typeof data.current_weather.windspeed === 'number') {
                const windSpeed = data.current_weather.windspeed;
                windspeed.innerText = `${windSpeed} km/h`;
            } else {
                console.error('Ungültige Datenstruktur für Windgeschwindigkeit:', data);
                windspeed.innerText = 'Windgeschwindigkeit nicht verfügbar';
            }

        } catch (error) {
            console.error('Fetch-Fehler:', error);
            curTemp.innerText = 'Fehler beim Laden der Daten';
            sunrisetime.innerText = 'Fehler beim Laden der Daten';
            sunsettime.innerText = 'Fehler beim Laden der Daten';
            windspeed.innerText = 'Fehler beim Laden der Daten';
        }

        // Elemente zum Dokument hinzufügen
        document.body.appendChild(headerDiv);
        document.body.appendChild(navContext);
        document.body.appendChild(mainContainer);
    }
}