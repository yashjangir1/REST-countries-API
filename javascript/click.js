import {creatingAboutPage, creatingBorderCountriesButton} from "./fetchingDataInAboutPage.js"
import {countryOnMap} from "./map.js"

let aboutPageEl = document.getElementById("aboutPage")

let country = localStorage.getItem("country")

if(country === null){
    localStorage.setItem("country", "Germany")
}
// ############### function appends data to about page ################

export function appendingData(countryName){
    // ################# running fetch on page load ############

    fetch("https://restcountries.com/v3.1/name/" + countryName + "?fullText=true")
        .then(response => response.json())
        .then(dataArray => {
            let data = dataArray[0]
            
            let nativeNameValues
            if(data.name.nativeName === undefined){
                nativeNameValues = data.name.common
            }
            else{
                nativeNameValues = Object.values(data.name.nativeName)
            }
            
            let currencyArr
            console.log(data.currencies)
            if(data.currencies === undefined){
                currencyArr = ["-"]
            }
            else{ 
                currencyArr = Object.values(data.currencies)
            }

            let languagesArr
            if(data.languages === undefined){
                languagesArr = ["Unknown"]
            }
            else{
                languagesArr = Object.values(data.languages)
            }

            let capitalArr

            if(data.capital === undefined){
                capitalArr = ["-"]
            }
            else{
                capitalArr = data.capital
            }

            creatingAboutPage(data.name.common, nativeNameValues, data.population.toLocaleString(), data.region, data.subregion, capitalArr, data.tld[0], currencyArr, languagesArr, data.flags.png)
            if(data.borders !== undefined){
                creatingBorderCountriesButton(data.borders)
            }
            else{
                let detailsContainerEl = document.getElementById("detailsContainer")
                
                let borderEl = document.createElement("h1")
                borderEl.textContent = "It is an Island"
                borderEl.classList.add("border-countries")
                detailsContainerEl.appendChild(borderEl)
            }
            countryOnMap(data.latlng, countryName)
            }
        )
}



if(aboutPageEl !== null){

    //only runs when about page is loaded
    country = localStorage.getItem("country")
    appendingData(country)
}

let homePageEl = document.getElementById("homePage")

//only runs when homepage is loaded

if(homePageEl !== null){
    homePageEl.addEventListener("click", function(e){
        // identify which element id clicked on the index.html page
            if(e.target.id.endsWith("Flag")){
                // if the id ends with "Flag" then we get the country name with the help of id and get the data
                country = (e.target.id).replace("Flag", "")
                localStorage.setItem("country", country)
                window.location.href = "../about.html"
            }
        } 
    )
}
