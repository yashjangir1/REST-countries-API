let mapAndDetailsContainerEl = document.getElementById("mapAndDetailsContainer")

export function countryOnMap(latlng, name){
	let mapEl = document.getElementById("map")
	if(mapEl === null){
        let mapELL = document.createElement("div")
		mapELL.id = "map"
		mapELL.classList.add("map-container")
		document.querySelector("body").appendChild(mapELL)

        var map = L.map('map').setView(latlng, 3);

		var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		var marker = L.marker(latlng).addTo(map)
			.bindPopup(name).openPopup();
	}
	else{
		mapEl.remove()

		let mapELL = document.createElement("div")
		mapELL.id = "map"
		mapELL.classList.add("map-container")
		mapAndDetailsContainerEl.appendChild(mapELL)

		var map = L.map('map').setView(latlng, 3);

		var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		var marker = L.marker(latlng).addTo(map)
			.bindPopup(name).openPopup();
	}

}