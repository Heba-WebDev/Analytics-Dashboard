"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartDataset } from "chart.js";
type Dataset = ChartDataset<"bar", number[]> & {
  borderColor: string;
  backgroundColor: string;
};
type Data = ChartData<"bar", number[], string> & { datasets: Dataset[] };
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graphe() {
  const [chartData, setChartData] = useState<Data>({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const dataValues = [
      5200, 20500, 2500, 23000, 9000, 45000, 9500, 24000, 36000, 4000, 3000,
      2100,
    ];
    const maxVal = Math.max(...dataValues);
    const backgroundColors = dataValues.map((val) =>
      val === maxVal ? "#34CAA5" : "rgba(52, 202, 165, 0.10)"
    );

    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: dataValues,
          active: false,
          borderColor: "",
          backgroundColor: backgroundColors as any,
          borderRadius: 10,
        },
      ],
    });
    setChartOptions({
      scales: {
        y: {
          grid: {
            drawBorder: false,
          },
          ticks: {
            // Define a callback to customize the ticks
            callback: function (
              value: number,
              index: number,
              values: string[]
            ) {
              // Display only the values you want
              const tickValues = [
                0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000,
                50000, 550000,
              ];
              return tickValues.includes(value) ? value : "";
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto md:col-span-2 relative h-[385px]  m-auto p-4 border dark:border-slate-800 rounded-lg bg-white dark:bg-slate-800">
        <Bar
          data={chartData}
          options={chartOptions}
          className=" dark:bg-slate-800"
        />
      </div>
    </>
  );
}
