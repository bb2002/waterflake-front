import React from "react";
import Chart from "chart.js";

export default function ConnectionChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "04/26 0시",
          "04/26 1시",
          "04/26 2시",
          "04/26 3시",
          "04/26 4시",
          "04/26 5시",
          "04/26 6시",
          "04/26 7시",
          "04/26 8시",
          "04/26 9시",
          "04/26 10시",
          "04/26 11시",
          "04/26 12시",
          "04/26 13시",
          "04/26 14시",
          "04/26 15시",
          "04/26 16시",
          "04/26 17시",
          "04/26 18시",
          "04/26 19시",
          "04/26 20시",
          "04/26 21시",
          "04/26 22시",
          "04/26 23시",
        ],
        datasets: [
          {
            label: '접속자(명)',
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [5,1,3,4,5,6,1,5,10,10,12,13,15,16,18,20,22,24,26,28,30,32,34,36],
            fill: false,
            barThickness: 20,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                24시간 통계
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                평균 접속자
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
