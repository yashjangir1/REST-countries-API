import {appendingData} from "./click.js"

let country = localStorage.getItem("country")
let detailsContainerEl = document.getElementById("detailsContainer")

document.addEventListener("click", function(e){
    // identify which element id clicked on the index.html page
        if(e.target.id.endsWith("borderButton")){
            // if the id ends with "Flag" then we get the country name with the help of id and get the data
            detailsContainerEl.innerHTML = ""
            country = (e.target.id).replace("borderButton", "")
            localStorage.setItem("country", country)
            appendingData(country)
        }
    } 
)