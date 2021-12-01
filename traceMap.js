$(document).ready(function(){
    $.ajax({
        //async:false,
        url: "http://localhost:3000/Todos",
        method: "GET",
        success: function(data) {
            //console.log(data);
            var long = [];
            var lat = [];
          

            for(var i in data) {
                long.push(data[i].longitude);
                lat.push(data[i].latitude);
            }


            var locX = long[0];
            var locY = lat[0];
        

            // var locY = score[0].toFixed(2);
            console.log(locX, locY);
           

            var mymap = L.map('mapid').setView([locX,locY],4);


            L.marker([lat[0],long[0]]).addTo(mymap).bindPopup('ISS is here!').openPopup();
            // L.marker([lat[0],long[0]]).addTo(mymap);

            
      
            // var player_rev = long.reverse();
            // var score_rev = lat.reverse();

            //combine 2 individual array to single 2d array
            var latlngs = lat.map((l, i) => [l, long[i]]);



            
        
            var path = L.polyline.antPath(latlngs, {
                "delay": 400,
                "dashArray": [
                    14,
                    20
                ],
                "weight": 5,
                "color": "#0000FF",
                "pulseColor": "#FFFFFF",
                "paused": false,
                "reverse": false,
                "hardwareAccelerated": true
                }).addTo(mymap);
        
            mymap.addLayer(path);
            mymap.fitBounds(path.getBounds());
            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
                maxZoom: 4
                //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' -->
            }).addTo(mymap);
        }
    });
});