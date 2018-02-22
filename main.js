window.onload = () => {
    var ctx = document.getElementById("chart").getContext('2d')
    var graphButton = document.getElementById("graphButton")
    var inputFeild = document.getElementById("input")

    var lineConfig = {
        type: 'line',
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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

    graphButton.addEventListener('click', () => {
        lineConfig.data.datasets[0].data = []   // clear current data
        for (var x = 0; x < 11; ++x) {
            lineConfig.data.datasets[0].data.push({
                x: x,
                y: eval(inputFeild.value)
            })
        }
        lineChart.update()
    })
}

// [{
//     x: 0,
//     y: 0
// }, {
//     x: 1,
//     y: 1
// }, {
//     x: 2,
//     y: 4
// }, {
//     x: 3,
//     y: 2
// }, {
//     x: 4,
//     y: 8   
// }]
