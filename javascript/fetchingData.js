import {themeChanger} from "./darkModeHomePage.js"

let countriesContainerEl = document.getElementById("countriesContainer")
let spinnerEl = document.getElementById("spinner")

let homePageDarkModeButtonEl = document.getElementById("homePageDarkModeButton")


export function creatingCountryBox(flag, countryName, population, region, capital, gmaps){
   
    // ######### country card-box ##############3

    let countryBoxEl = document.createElement("div")
    countryBoxEl.classList.add("country-box", "center-element", "dark-mode-background")
    countryBoxEl.id = countryName
    countriesContainerEl.appendChild(countryBoxEl)




    // Flag 

    let flagEl = document.createElement("img")
    flagEl.classList.add("flag")
    flagEl.alt = countryName + "flag image"
    flagEl.src = flag
    flagEl.id = countryName + "Flag"
    countryBoxEl.appendChild(flagEl)
    



    // country box text container

    let countriesDetailContainerEl = document.createElement("div")
    countriesDetailContainerEl.classList.add("country-details-box")
    if(localStorage.getItem("darkMode") === "true"){
        countryBoxEl.classList.add("light-dark-mode-background", "dark-mode-text")
    }
    else{
        countryBoxEl.classList.add("light-background", "light-mode-text")
    }
    countryBoxEl.appendChild(countriesDetailContainerEl)



    //country name

    let countryNameEl = document.createElement("h1")
    countryNameEl.innerHTML = countryName
    countryNameEl.classList.add("country-name")
    countriesDetailContainerEl.appendChild(countryNameEl)



    //population


    let populationEl = document.createElement("h1")
    populationEl.innerHTML = "Population: "
    populationEl.classList.add("key")
    countriesDetailContainerEl.appendChild(populationEl)

    let populationSpan = document.createElement("span")
    populationSpan.textContent = population
    populationSpan.classList.add("detail")
    populationEl.appendChild(populationSpan)




    //region

    let regionEl = document.createElement("h1")
    regionEl.innerHTML = "Region: "
    regionEl.classList.add("key")
    countriesDetailContainerEl.appendChild(regionEl)

    let regionSpan = document.createElement("span")
    regionSpan.textContent = region
    regionSpan.classList.add("detail")
    regionSpan.id = countryName + "RegionName"
    regionEl.appendChild(regionSpan)





    //capital


    let capitalEl = document.createElement("h1")
    capitalEl.innerHTML = "Capital: "
    capitalEl.classList.add("key")
    countriesDetailContainerEl.appendChild (capitalEl)

    let capitalSpan = document.createElement("span")
    capitalSpan.textContent = capital
    capitalSpan.classList.add("detail")
    capitalSpan.id = countryName + "CapitalName"
    capitalEl.appendChild (capitalSpan)




    //google maps link

    let gmapsSpan = document.createElement("a")
    gmapsSpan.target = "_blank"
    gmapsSpan.href = gmaps
    gmapsSpan.textContent = "Show on Google Maps"
    gmapsSpan.classList.add("detail", "gmaps")
    countriesDetailContainerEl.appendChild(gmapsSpan)

}



// knowing whether country has a capital city or not

export function capitalCity(data){
    if(data.capital === undefined){
       return "No capital city"
    }
    else{
       return data.capital[0]
    }
}



// spinner added


// ##########3 fethching data for the countries ###################

function runningFetch(){
    spinnerEl.classList.remove("d-none")
    fetch("https://restcountries.com/v3.1/all")
   .then(response => response.json())
   .then(datas => {
       
       for(let data of datas){
           let capital = capitalCity(data)
           let population = data.population.toLocaleString()
           creatingCountryBox(data.flags.png, data.name.common,population,data.region, capital, data.maps.googleMaps)
       }

       //spinner removed
       spinnerEl.classList.add("d-none")
   })
}

let darkMode = localStorage.getItem("darkMode")
if(darkMode === null){
    console.log("h")
    localStorage.setItem("darkMode", "true")
}

runningFetch()

let buttonTextEl = document.getElementById("buttonText")

if(localStorage.getItem("darkMode") === "false"){
    buttonTextEl.textContent = "Dark Mode"
    spinnerEl.classList.add("light-mode-text")
    spinnerEl.classList.remove("dark-mode-text")
}
else{
    buttonTextEl.textContent = "Light Mode"
    spinnerEl.classList.remove("light-mode-text")
    spinnerEl.classList.add("dark-mode-text")
}

homePageDarkModeButtonEl.onclick = () => {
    countriesContainerEl.innerHTML = ""
    runningFetch()
    themeChanger()
    if(localStorage.getItem("darkMode") === "false"){
        buttonTextEl.textContent = "Dark Mode"
    }
    else{
        buttonTextEl.textContent = "Light Mode"
    }
}