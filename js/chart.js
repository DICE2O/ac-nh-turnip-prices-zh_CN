let chart_instance = null;

Chart.defaults.global.defaultFontFamily = "'Varela Round', '-apple-system', BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif";

const chart_options = {
  elements: {
    line: {
      backgroundColor: "#DEF2D9",
      backgroundColor: "#DEF2D9",
      cubicInterpolationMode: "monotone",
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    intersect: false,
    mode: "index",
  },
};

function update_chart(input_data, possibilities) {
  var ctx = $("#chart");

  datasets = [
    {
      label: "输入价",
      data: input_data.slice(1),
      fill: false,
    },
    {
      label: "最低价",
      data: possibilities[0].prices.slice(1).map(day => day.min),
      fill: false,
    },
    {
      label: "最高价",
      data: possibilities[0].prices.slice(1).map(day => day.max),
      fill: "-1",
    },
  ];

  if (chart_instance) {
    chart_instance.data.datasets = datasets;
    chart_instance.update();
  } else {
    chart_instance = new Chart(ctx, {
      data: {
        datasets: datasets,
        labels: ["周日", "周一上午", "周一下午", "周二上午", "周二下午", "周三上午", "周三下午", "周四上午", "周四下午", "周五上午", "周五下午", "周六上午", "周六下午"],
      },
      options: chart_options,
      type: "line",
    });
  }
}
