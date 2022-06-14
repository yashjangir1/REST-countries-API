
let homePageDarkModeButtonEl = document.getElementById("homePageDarkModeButton")
let homePageNavbarEl = document.getElementById("homePageNavbar")
let hPnavbarHeadingEl = document.getElementById("hPnavbarHeading")

let searchBarContainerEl = document.getElementById("searchBarContainer")
let searchBarEl = document.getElementById("searchBar")

let homePageContainerEl = document.getElementById("homePageContainer")

let regionMenuEl = document.getElementById("regionMenu")

let countriesContainerEl = document.getElementById("countriesContainer")

let homePageEl = document.getElementById("homePage")

function themeSetting(){
    if(localStorage.getItem("darkMode") === "false"){
        // ###### for Navbar

        homePageNavbarEl.classList.remove("dark-mode-navbar")
        homePageNavbarEl.classList.add("light-background")

        homePageDarkModeButtonEl.classList.remove("dark-mode-text")
        homePageDarkModeButtonEl.classList.add("light-mode-text")

        hPnavbarHeadingEl.classList.remove("dark-mode-text")
        hPnavbarHeadingEl.classList.add("light-mode-text")



        // for search bar
        
        searchBarContainerEl.classList.remove("dark-mode-text", "light-dark-mode-background")
        searchBarContainerEl.classList.add("light-mode-text", "light-background")

        searchBarEl.classList.remove("light-dark-mode-background")
        searchBarEl.classList.add("light-background")

        // homepage container

        homePageContainerEl.classList.remove("dark-mode-background")
        homePageContainerEl.classList.add("light-background")

        //dropdown menu

        regionMenuEl.classList.remove("light-dark-mode-background", "dark-mode-text")
        regionMenuEl.classList.add("light-background", "light-mode-text")


        countriesContainerEl.classList.remove("dark-mode-text")
        countriesContainerEl.classList.add("light-mode-text")

        // home page

        homePageEl.classList.add("light-background")
        homePageEl.classList.remove("dark-mode-background")

    }
    else{

        //navbar

        homePageNavbarEl.classList.add("dark-mode-navbar")
        homePageNavbarEl.classList.remove("light-background")
        
        homePageDarkModeButtonEl.classList.remove("light-mode-text")
        homePageDarkModeButtonEl.classList.add("dark-mode-text")

        hPnavbarHeadingEl.classList.add("dark-mode-text")
        hPnavbarHeadingEl.classList.remove("light-mode-text")

        

        //for search bar

        searchBarContainerEl.classList.add("dark-mode-text", "light-dark-mode-background")
        searchBarContainerEl.classList.remove("light-mode-text", "light-background")

        searchBarEl.classList.add("light-dark-mode-background")
        searchBarEl.classList.remove("light-background")

        // homepage container

        homePageContainerEl.classList.add("dark-mode-background")
        homePageContainerEl.classList.remove("light-background")

        //dropdown menu

        regionMenuEl.classList.add("light-dark-mode-background", "dark-mode-text")
        regionMenuEl.classList.remove("light-background", "light-mode-text")


        countriesContainerEl.classList.add("dark-mode-text")
        countriesContainerEl.classList.remove("light-mode-text")


         // home page

         homePageEl.classList.remove("light-background")
         homePageEl.classList.add("dark-mode-background")
    }
}

export function themeChanger(){
    if((localStorage.getItem("darkMode")) === "true"){
        localStorage.setItem("darkMode", "false")
        themeSetting()
    }
    else{
        localStorage.setItem("darkMode", "true")
        themeSetting()
    }
}

themeSetting()