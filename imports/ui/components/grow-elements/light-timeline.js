import echarts from 'echarts';

class lightTimeline {
  beforeRegister() {
    this.is = 'light-timeline';
    this.properties = {
      chartHeight: {
        type: Number,
        value: 400,
      },
      chartWidth: {
        type: Number,
        value: 380,
      },
    };
  }
  attached() {
    this.draw();
  }
  draw() {
    this.lightTimeline = this.lightTimeline || echarts.init(this.$.container, 'macarons');
    let base = +new Date(2015, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    const date = [];

    const data = [Math.random() * 10];

    for (let i = 1; i < 365; i++) {
      const now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 2 + data[i - 1]));
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Light',
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore : {
            show: true,
            title: 'Restore',
          },
          saveAsImage : {
            show: true,
            title: 'Save as image',
          },
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
      }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name:'light-timeline',
          type:'line',
          smooth:true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: 'rgb(255, 70, 131)'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }])
            }
          },
          data: data
        }
      ]
    };

    this.lightTimeline.setOption(option);
  }
}
Polymer(lightTimeline);
