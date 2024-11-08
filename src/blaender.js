

export class blaender {
    constructor(){
        this.blaender = [   'Berlin', 'Brandenburg', 'Mecklenburg-Vorpommern', 'Sachsen',
                            'Sachsen-Anhalt', 'Thüringen', 'Hamburg', 'Bremen',
                            'Niedersachsen', 'Schleswig-Holstein', 'Hessen', 'Rheinland-Pfalz',
                            'Saarland', 'Baden-Württemberg', 'Bayern', 'Nordrhein-Westfalen'];
    
    }

    droplaender(ulBundeslaender){
        for(let i = 0; i <= this.blaender.length - 1; i++){
            let bland = this.blaender[i];

            
            let libland = document.createElement('li');
            ulBundeslaender.appendChild(libland);

            let abland = document.createElement('a');
            abland.classList.add('dropdown-item');
            abland.href = '#';
            abland.innerText = bland;
            libland.appendChild(abland);
        }
    }

    landAusgabe(){
        
    }
}