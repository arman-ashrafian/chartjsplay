window.onload = () => {
    var ctx = document.getElementById("chart").getContext('2d')
    var graphButton = document.getElementById("graphButton")
    var inputFeild = document.getElementById("input")

    var lineConfig = {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: "label",
                backgroundColor: "rgb(0,100,200)",
                borderColor: "rgb(0,100,200)",
                fill: false,
                data: []
            }]
        },
        options: {
            responsive: true
        }
    }
    var lineChart = new Chart(ctx, lineConfig)

    // set line chart lables
    for(var i = 0; i <= 10; i=i+0.1) {
        lineConfig.data.labels.push(i)
    }

    graphButton.addEventListener('click', () => {
        lineConfig.data.datasets[0].data = []   // clear current data
        for (var x = 0; x < 11; x=x+.1) {
            lineConfig.data.datasets[0].data.push({
                x: x,
                y: eval(inputFeild.value)   // DANGER: maybe do some reg ex 0__0
            })
        }
        lineChart.update()
    })
}
