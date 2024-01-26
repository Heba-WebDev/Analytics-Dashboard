import Image from "next/image";
import { StringLiteral } from "typescript";
interface props {
  icon: string;
  trend: string;
  title: string;
  number: string;
  precentage: string;
}
export default function Widget({
  icon,
  trend,
  title,
  number,
  precentage,
}: props) {
  return (
    <div
      className=" bg-white dark:bg-slate-800 w-[100%] h-[180px] rounded-2xl border
     dark:border-slate-800 p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className=" w-10 h-10 border flex items-center justify-center p-1 rounded-full">
          <Image
            src={icon}
            alt={title}
            width={30}
            height={10}
            style={{ width: "25px", height: "auto" }}
          />
        </div>
        <div>
          <Image
            src={
              trend === "up"
                ? "/Images/widgets/up-chart.svg"
                : "/Images/widgets/down-chart.svg"
            }
            alt="total orders"
            width={30}
            height={10}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      </div>
      <div>
        <h3 className=" text-lg font-medium text-[#898989]">{title}</h3>
        <p className=" text-2xl font-semibold">{number}</p>
      </div>
      <div className=" flex items-center justify-between">
        <div
          className={`flex items-center gap-1 ${
            trend === "up" ? "bg-[#34CAA5]" : "bg-[#ED544E]"
          } bg-opacity-[.12] ${
            trend === "up" ? "text-[#34CAA5]" : "text-[#ED544E]"
          }
        px-2 py-[2px] rounded-full -mb-1`}
        >
          <Image
            src={
              trend === "up"
                ? "/Images/widgets/trending-up.svg"
                : "/Images/widgets/trending-down.svg"
            }
            alt="total orders"
            width={30}
            height={10}
            style={{ width: "10px", height: "auto" }}
          />
          <p className=" text-xs">{precentage}</p>
        </div>
        <p className="text-sm text-[#606060]">vs. previous month</p>
      </div>
    </div>
  );
}
