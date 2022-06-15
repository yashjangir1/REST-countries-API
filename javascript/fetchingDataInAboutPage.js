



//This files creates the about page
export function creatingAboutPage(countryName, nativeName, population, region, subRegion, capitals, domain, currencies, languages, flag){
    
    // getting detailsContainer from about page
    
    let detailsContainerEl = document.getElementById("detailsContainer")

    // Country name

    let countryNameAEl = document.createElement("h1")
    countryNameAEl.textContent = countryName
    countryNameAEl.classList.add("country-name", "country-name-A")
    detailsContainerEl.appendChild(countryNameAEl)


    // native names

    let nativeNameEl = document.createElement("h1")
    nativeNameEl.textContent = "Native Name: "
    nativeNameEl.classList.add("key")
    detailsContainerEl.appendChild(nativeNameEl)

    for(let name of nativeName){
        let nativeNameSpan = document.createElement("span")
        nativeNameSpan.textContent = name.official + ", "
        nativeNameSpan.classList.add("detail")
        nativeNameEl.appendChild(nativeNameSpan)
    }

    // population data

    let populationAEl = document.createElement("h1")
    populationAEl.textContent = "Population: "
    populationAEl.classList.add("key")
    detailsContainerEl.appendChild(populationAEl)

    let populationASpan = document.createElement("span")
    populationASpan.textContent = population
    populationASpan.classList.add("detail")
    populationAEl.appendChild(populationASpan)

    

    //region

    let regionAEl = document.createElement("h1")
    regionAEl.textContent = "Region: "
    regionAEl.classList.add("key")
    detailsContainerEl.appendChild(regionAEl)

    let regionASpan = document.createElement("span")
    regionASpan.textContent = region
    regionASpan.classList.add("detail")
    regionAEl.appendChild(regionASpan)

    //sub-region

    let subRegionAEl = document.createElement("h1")
    subRegionAEl.textContent = "Sub Region: "
    subRegionAEl.classList.add("key")
    detailsContainerEl.appendChild(subRegionAEl)

    let subRegionASpan = document.createElement("span")
    subRegionASpan.textContent = subRegion
    subRegionASpan.classList.add("detail")
    subRegionAEl.appendChild(subRegionASpan)
    


    //capital

    let capitalAEl = document.createElement("h1")
    capitalAEl.textContent = "Capital: "
    capitalAEl.classList.add("key")
    detailsContainerEl.appendChild(capitalAEl)

    for(let capital of capitals){
        let capitalASpan = document.createElement("span")
        capitalASpan.textContent = capital
        capitalASpan.classList.add("detail")
        capitalAEl.appendChild(capitalASpan)
    }


    //break element

    let breakEl1 = document.createElement("br")
    detailsContainerEl.appendChild(breakEl1)

   // top level domain

    let domainEl = document.createElement("h1")
    domainEl.textContent = "Top Level Domain: "
    domainEl.classList.add("key")
    detailsContainerEl.appendChild(domainEl)

    let domainSpan = document.createElement("span")
    domainSpan.textContent = domain
    domainSpan.classList.add("detail")
    domainEl.appendChild(domainSpan)
     


    // currency

    let currencyEl = document.createElement("h1")
    currencyEl.textContent = "Currencies: "
    currencyEl.classList.add("key")
    detailsContainerEl.appendChild(currencyEl)

    for(let currency of currencies){
        let currencySpan = document.createElement("span")
        currencySpan.textContent = currency.name + ", "
        currencySpan.classList.add("detail")
        currencyEl.appendChild(currencySpan)
    }
    


    // languages

    let LanguageEl = document.createElement("h1")
    LanguageEl.textContent = "Languages: "
    LanguageEl.classList.add("key")
    detailsContainerEl.appendChild(LanguageEl)

    for(let language of languages){
        let LanguageSpan = document.createElement("span")
        LanguageSpan.textContent = language + ", "
        LanguageSpan.classList.add("detail")
        LanguageEl.appendChild(LanguageSpan)
    }

    let breakEl2 = document.createElement("br")
    detailsContainerEl.appendChild(breakEl2)
}

export function creatingBorderCountriesButton(borderCountries){
    // creating buttons for border countries


    let detailsContainerEl = document.getElementById("detailsContainer")
    
    let borderEl = document.createElement("h1")
    borderEl.textContent = "Border Countries: "
    borderEl.classList.add("border-countries")
    detailsContainerEl.appendChild(borderEl)

    let borderCountryButtonConEl = document.createElement("div")
    borderCountryButtonConEl.classList.add("border-countries-buttons", "d-flex", "flex-row", "justify-content-center")
    detailsContainerEl.appendChild(borderCountryButtonConEl)
      
    // fetches data for the border countries

    for(let i of borderCountries){
        let url = "https://restcountries.com/v3.1/alpha/" + i
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let borderCButton = document.createElement('button')
            borderCButton.textContent = data[0].name.common
            borderCButton.id = data[0].name.common + "borderButton"
            borderCButton.classList.add("country-button")
            borderCButton.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${data[0].flags.png})`
            borderCountryButtonConEl.appendChild(borderCButton)
        })
    }
}