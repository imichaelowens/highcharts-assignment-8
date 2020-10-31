Highcharts.chart('chart1', {

    title: {
        text: 'Total Number of Drug Intoxication Deaths by Selected Substances: 2007-2016'
    },

    subtitle: {
        text: 'Source: The State of Maryland, data.gov'
    },

    yAxis: {
        title: {
            text: 'Number of Deaths'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2007 to 2016'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Heroin',
        data: [289, 360, 238, 247, 392, 464, 399, 578, 748, 1212]
    }, {
        name: 'Prescription Drugs',
        data: [280, 251, 311, 342, 311, 316, 302, 330, 351, 418]
    }, {
        name: 'Alcohol',
        data: [175, 162, 160, 161, 195, 238, 187, 270, 310, 582]
    }, {
        name: 'Benzodiazepine',
        data: [48, 52, 58, 68, 73, 69, 37, 103, 91, 126]
    }, {
        name: 'Cocaine',
        data: [157, 162, 135, 148, 153, 154, 248, 198, 221, 463]
    }, {
        name: 'Fentanyl',
        data: [25, 27, 39, 26, 29, 58, 26, 186, 340, 1119]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('chart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Drug Count Charges by Age Group'
    },
    subtitle: {
        text: 'Source: Bureau of Justice Statistics'
    },
    xAxis: {
        categories: [
            '10-17',
            '18-24',
            '25-30',
            '30-35',
            '35-40',
            '40-45',
            '50-55',
            '60-65'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Drug Charges'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total Drug Count Charges Per Age Group',
        data: [194996, 651099, 288970, 181633, 158729, 146554, 117408, 63412]

    }]
});
