window.onload = () => {
    var ctx = document.getElementById("chart").getContext('2d')

    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0,1,2,3,4,5],
            datasets: [{
                label: "label",
                backgroundColor: "rgb(0,100,200)",
                borderColor: "rgb(0,100,200)",
                fill: false,
                data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 3,
                    y: 2
                }, {
                    x: 4,
                    y: 8   
                }]
            }]
        },
        options: {
            responsive: true
        }
    })
}
