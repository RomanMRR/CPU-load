var dataObj={
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'CPU usage',
                data: [],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percent'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time since start (s)'
                    }
                }]
            }
        }
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx,dataObj );