var map = L.map('map').setView([0,0], 2);

var traceLoc = [];
function moveISS () {
    $.getJSON('http://localhost:3000/Todos', function(data) {
        
        var tempNew = [];
            var latNew = [];
            var lonNew = [];
            var locNew =[];
            // var timeNew = [];

            for(var i in data) {
                // idNew.push(data[i].id);
                latNew.push(data[i].latitude);
                lonNew.push(data[i].longitude);
                locNew.push(data[i].location);
                // tempNew.push(data[i].temperature);
                // timeNew.push(data[i].timestamp);
            }

            //combine 2 individual array to 2d array -- for trace route OTW
            const traceLoc= latNew.map((l, i) => [l, lonNew[i]]);

            //console.log(traceLoc);

            //To update latest lat longitudee at the 1st Window
            $('#latCurrent').html(Math.round(latNew[0]*1000)/1000.0);
            $('#lonCurrent').html(Math.round(lonNew[0]*1000)/1000.0);
            $('#locCurrent').append(locNew[0]);

            //To update location based on previous duration
            $('#locNew30').append(locNew[1]); //30mins
            $('#locNew60').append(locNew[2]); //1 hour
            $('#locNew120').append(locNew[3]); //2 hour

            //For chartJs parameter - latest data
            iss.setLatLng([latNew[0], lonNew[0]]);
            isscirc.setLatLng([latNew[0], lonNew[0]]);
            map.panTo([latNew[0], lonNew[0]], animate=true);

            
            
        
    });
    
   
    //setTimeout(moveISS, 5000); 
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
// var path = L.polyline.antPath(traceLoc, {
//             "delay": 400,
//             "dashArray": [
//                 14,
//                 20
//             ],
//             "weight": 5,
//             "color": "#0000FF",
//             "pulseColor": "#FFFFFF",
//             "paused": false,
//             "reverse": false,
//             "hardwareAccelerated": true
//             }).addTo(map);
        
// map.addLayer(path);
// map.fitBounds(path.getBounds());

moveISS();