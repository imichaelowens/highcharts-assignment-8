// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Blueberries']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in John and Sarah\'s house'
      }
    },
    series: [{
      name: 'John',
      data: [1, 0, 4, 7]
    }, {
      name: 'Sarah',
      data: [5, 7, 3, 5]
    }]
  });
