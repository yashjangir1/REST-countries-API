let aboutPageDarkModeButtonEl = document.getElementById("aboutPageDarkModeButton")
let aboutPageNavbarEl = document.getElementById("aboutPageNavbar")
let aPnavbarHeadingEl = document.getElementById("aPnavbarHeading")

let backButtonEl = document.getElementById("backButton")

let aboutPageEl = document.getElementById("aboutPage")

let detailsContainerEl = document.getElementById("detailsContainer")

let aboutPageDarkModeButtonTextEl = document.getElementById("aboutPageDarkModeButtonText")

function aboutPageThemeSetting(){
    if(localStorage.getItem("darkMode") === "false"){
        // ###### for Navbar

        aboutPageNavbarEl.classList.remove("dark-mode-navbar")
        aboutPageNavbarEl.classList.add("light-background")

        aboutPageDarkModeButtonEl.classList.remove("dark-mode-text")
        aboutPageDarkModeButtonEl.classList.add("light-mode-text")

        aPnavbarHeadingEl.classList.remove("dark-mode-text")
        aPnavbarHeadingEl.classList.add("light-mode-text")



        // back button
        
        backButtonEl.classList.add("light-background", "light-mode-text")
        backButtonEl.classList.remove("dark-mode-text", "light-dark-mode-background")


        // body
        aboutPageEl.classList.add("light-background")
        aboutPageEl.classList.remove("dark-mode-background")
        
        
        // details container

        detailsContainerEl.classList.remove("dark-mode-text")
        detailsContainerEl.classList.add("light-mode-text")


        aboutPageDarkModeButtonTextEl.textContent = "Dark Mode"

    }
    else{

        //navbar

        aboutPageNavbarEl.classList.add("dark-mode-navbar")
        aboutPageNavbarEl.classList.remove("light-background")
        
        aboutPageDarkModeButtonEl.classList.remove("light-mode-text")
        aboutPageDarkModeButtonEl.classList.add("dark-mode-text")

        aPnavbarHeadingEl.classList.add("dark-mode-text")
        aPnavbarHeadingEl.classList.remove("light-mode-text")

        

        // back buttons

        backButtonEl.classList.remove("light-background", "light-mode-text")
        backButtonEl.classList.add("dark-mode-text", "light-dark-mode-background")


         // body
         aboutPageEl.classList.remove("light-background")
         aboutPageEl.classList.add("dark-mode-background")

         //details container

         detailsContainerEl.classList.add("dark-mode-text")
         detailsContainerEl.classList.remove("light-mode-text")


         aboutPageDarkModeButtonTextEl.textContent = "Light Mode"


    }
}

aboutPageThemeSetting()

aboutPageDarkModeButtonEl.onclick = () => {
    if(localStorage.getItem("darkMode") === "true"){
        localStorage.setItem("darkMode", false)
        aboutPageThemeSetting()
    }
    else{
        localStorage.setItem("darkMode", true)
        aboutPageThemeSetting()
    }
}