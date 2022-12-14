var dataObj={
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6],
            datasets: [{
                label: 'Real time data',
                data: [12, 19, 3, 5, 2, 3],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx,dataObj );