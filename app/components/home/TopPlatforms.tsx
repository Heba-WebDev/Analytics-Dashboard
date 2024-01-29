import Link from "next/link";
import ProgressBar from "./ProgressBar";

const PLATFORMS = [
  {
    id: 0,
    name: "Book Bazaar",
    presentage: "60",
    revenue: "$2,500,000",
    revenuePresentage: "+15%",
  },
  {
    id: 1,
    name: "Artisan Aisle",
    presentage: "50",
    revenue: "$1,800,000",
    revenuePresentage: "+10%",
  },
  {
    id: 2,
    name: "Toy Troop",
    presentage: "50",
    revenue: "$1,200,000",
    revenuePresentage: "+8%",
  },
  {
    id: 3,
    name: "XStore",
    presentage: "50",
    revenue: "$1,200,000",
    revenuePresentage: "+8%",
  },
];

export default function TopPlatforms() {
  return (
    <div className=" col-span-2 w-full bg-white dark:bg-slate-800 border dark:border-slate-800 h-full rounded-2xl p-4">
      <div className=" flex items-center justify-between">
        <p className=" text-lg font-semibold">Top Platform</p>
        <Link href="" className=" text-[#34CAA5]">
          See All
        </Link>
      </div>
      <div className=" grid gap-2">
        {PLATFORMS.map((platform, index) => {
          return (
            <ProgressBar
              key={platform.id}
              index={index}
              name={platform.name}
              presentage={platform.presentage}
              revenue={platform.revenue}
              revenuePresentage={platform.revenuePresentage}
            />
          );
        })}
      </div>
    </div>
  );
}
