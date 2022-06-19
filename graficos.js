
const grafico = (limparGrafico, type, labels, label, data) => {
    if (!type)
        return;

    if (!labels)
        labels = [];

    if (!label)
        label = labels.length + ' usuários que estão mais gerando alterações por minuto';

    if (!data)
        data = [];

    limparGrafico();

    try {
        let ctx = document.querySelector('#canvasChart');
        let myChart = new Chart(ctx, {
            type,
            data: {
                labels,
                datasets: [
                    {
                        label,
                        data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
    catch (exception) {
        alert('Erro ao montar o gráfico: ' + exception)
    }
}

const graficoMassaDeDados = (limparGrafico, type, labels, label, data) => {
    let listaDados1 = [];
    let listaDados2 = [];
    let listaDados3 = [];
    let listaDados4 = [];
    let listaDados5 = [];
    let listaDados6 = [];
    if (!type)
        return;

    if (!labels)
        labels = [];

    if (!label)
        label = labels.length + ' usuários que estão mais gerando alterações por minuto';

    if (data) {
        listaDados1 = data[0][0];
        listaDados2 = data[1][0];
        listaDados3 = data[2][0];
        listaDados4 = data[3][0];
        listaDados5 = data[4][0];
        listaDados6 = data[5][0];
    }

    limparGrafico();

    try {
        let ctx = document.querySelector('#canvasChart');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: MONTHS,
                datasets: [
                    {
                        label: labels[0],
                        data: listaDados1,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: CHART_COLORS.red,
                        yAxisID: 'y1',
                    },
                    {
                        label: labels[1],
                        data: listaDados2,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: CHART_COLORS.blue,
                        yAxisID: 'y2',
                    },
                    {
                        label: labels[2],
                        data: listaDados3,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: CHART_COLORS.yellow,
                        yAxisID: 'y3',
                    }, {
                        label: labels[3],
                        data: listaDados4,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: CHART_COLORS.green,
                        yAxisID: 'y4',
                    }, {
                        label: labels[4],
                        data: listaDados5,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: CHART_COLORS.purple,
                        yAxisID: 'y5',
                    }, {
                        label: labels[5],
                        data: listaDados6,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: CHART_COLORS.orange,
                        yAxisID: 'y6',
                    },
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart - Multi Axis'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',

                        // grid line settings
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },
        });

    }
    catch (exception) {
        alert('Erro ao montar o gráfico: ' + exception)
    }
}
const MONTHS = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
];

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};