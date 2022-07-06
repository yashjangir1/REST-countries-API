import {creatingCountryBox, capitalCity} from "./fetchingData.js"

let countriesContainerEl = document.getElementById("countriesContainer")
let spinnerEl = document.getElementById("spinner")

let searchBarEl = document.getElementById("searchBar")

let errorMessageEl = document.createElement("p")
errorMessageEl.textContent = ""

const url = "https://restcountries.com/v3.1/name/"

searchBarEl.addEventListener("keydown", function(event){
    spinnerEl.classList.remove("d-none")
    countriesContainerEl.innerHTML = ""
    if(event.target.value === ""){
        errorMessageEl.textContent = ""
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(datas => {  
                for(let data of datas){
                    let capital = capitalCity(data)
                    let population = data.population.toLocaleString()
                    creatingCountryBox(data.flags.png, data.name.common,population,data.region, capital, data.maps.googleMaps)
                }
                spinnerEl.classList.add("d-none")
            })
    }
    else{
        let newUrl = url + event.target.value
        fetch(newUrl)
          .then(response => {
            errorMessageEl.textContent = ""
            if(response.status > 299){
                errorMessageEl.textContent = "No country found"
                errorMessageEl.classList.add("error-message", "dark-mode-text")
                countriesContainerEl.appendChild(errorMessageEl)
            }
            else{
                return response.json()
            }
          })
          .then(datas => {
            for(let data of datas){
                if(datas.status === 404){
                    countriesContainerEl.innerHTML = "No Countries Found"
                    console.log("hello")
                    return
                }
                let capital = capitalCity(data)
                let population = data.population.toLocaleString()
                creatingCountryBox(data.flags.png, data.name.common,population,data.region, capital, data.maps.googleMaps)
            }
            spinnerEl.classList.add("d-none")
        })
    }
})