import Widget from "./Widget";

const widgetsInfo = [
  {
    icon: "/Images/widgets/total-order.svg",
    trend: "up",
    title: "Total Order",
    number: "350",
    precentage: "23,5%",
  },
  {
    icon: "/Images/widgets/total-refund.svg",
    trend: "down",
    title: "Total Refund",
    number: "270",
    precentage: "23,5%",
  },
  {
    icon: "/Images/widgets/sales.svg",
    trend: "down",
    title: "Average Sales",
    number: "1567",
    precentage: "23,5%",
  },
  {
    icon: "/Images/widgets/income.svg",
    trend: "up",
    title: "Average Sales",
    number: "$350.000",
    precentage: "23,5%",
  },
];

export default function Widgets() {
  return (
    <section className="grid md:grid-cols-2 gap-6 w-full col-span-3">
      {widgetsInfo.map((widget) => {
        return (
          <>
            <Widget
              icon={widget.icon}
              trend={widget.trend}
              title={widget.title}
              number={widget.number}
              precentage={widget.precentage}
            />
          </>
        );
      })}
    </section>
  );
}
