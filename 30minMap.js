
var map = L.map('map').setView([0,0], 2);

function moveISS () {
    $.getJSON('http://localhost:3000/Todos', function(data) {
        
        var tempNew = [];
            var latNew = [];
            var lonNew = [];
            var timeNew = [];

            for(var i in data) {
                // idNew.push(data[i].id);
                latNew.push(data[i].latitude);
                lonNew.push(data[i].longitude);
                tempNew.push(data[i].temperature);
                timeNew.push(data[i].timestamp);
            }

            // console.log(latNew, lonNew, tempNew);

            iss.setLatLng([latNew[0], lonNew[0]]);
            isscirc.setLatLng([latNew[0], lonNew[0]]);
            map.panTo([latNew[0], lonNew[0]], animate=true);

        
    });
    
   
    setTimeout(moveISS, 5000); 
}

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 15, //default 4
}).addTo(map);

var ISSIcon = L.icon({
    iconUrl: '/media/ISSIcon.png',
    iconSize: [50, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: '/media/ISSIcon_shadow.png',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});

var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
var isscirc = L.circle([0,0], 2200e3, {color: "#0B2CE1", opacity: 0.3, weight:1, fillColor: "#0B2CE1", fillOpacity: 0.1}).addTo(map).bindPopup('ISS is here!').closePopup(); 

//traceroute
// var polyline = L.polyline(traceCoordinate).addTo(map);

moveISS();