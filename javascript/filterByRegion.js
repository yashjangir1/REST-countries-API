import {creatingCountryBox, capitalCity} from "./fetchingData.js"

let regionMenuEl = document.getElementById("regionMenu")

let spinnerEl = document.getElementById("spinner")

let countriesContainerEl = document.getElementById("countriesContainer")

const url = "https://restcountries.com/v3.1/region/"

spinnerEl.classList.remove("d-none")

regionMenuEl.addEventListener('change', function(){
    let region = this.value
    let newUrl = url + region
    fetch(newUrl)
      .then(response => response.json())
      .then(datas => {
        countriesContainerEl.innerHTML = ""
        for(let data of datas){
            let capital = capitalCity(data)
            let population = data.population.toLocaleString()
            creatingCountryBox(data.flags.png, data.name.common,population,data.region, capital, data.maps.googleMaps)
        }
        spinnerEl.classList.add("d-none")
      })
})