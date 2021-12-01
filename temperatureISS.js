//  =========================AJAX GET data
$(document).ready(function(){
    $.ajax({
        //async:false,
        url: "http://localhost:3000/Todos",
        method: "GET",
        success: function(data) {
            //console.log(data);
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
            
            // chart starts here
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['30min','30min','30min','30min','30min','30min','30min','30min','30min','30min','30min','Current'],
                    datasets: [{
                        label: '# of Votes',
                        data: tempNew,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
            // chart ends here
            
      
        }
    });
});
