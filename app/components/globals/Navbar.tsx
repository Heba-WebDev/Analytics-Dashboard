import Image from "next/image";
import { FiBell } from "react-icons/fi";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Navbar() {
  return (
    <nav className="border dark:border-slate-700 border-x-0 border-t-0 w-full py-5">
      <section className="px-2 container mx-auto flex items-center justify-between ">
        <div className="">
          <h2 className=" text-xl font-semibold">Dashboard</h2>
        </div>
        <div className=" flex items-center gap-4">
          <form className="relative hidden lg:block">
            <input
              placeholder="Search..."
              className=" w-[350px] border rounded-full py-[11.5px] pl-7 placeholder:text-sm
               dark:bg-slate-800 dark:border-slate-700"
            />
            <Image
              src="/Images/nagivation/Icon-Search.svg"
              alt="search"
              width={15}
              height={15}
              style={{ width: "15px", height: "auto" }}
              className=" absolute top-[37%] left-[10px]"
            />
          </form>
          <div className="hidden lg:flex items-center gap-1 dark:gap-2">
            <Image
              src="/Images/nagivation/light-calender.svg"
              alt="date"
              width={15}
              height={15}
              style={{ width: "20px", height: "auto" }}
              className="hidden dark:block"
            />
            <Image
              src="/Images/nagivation/calender.svg"
              alt="date"
              width={15}
              height={15}
              style={{ width: "20px", height: "auto" }}
              className="block dark:hidden"
            />
            <span className=" text-sm font-medium">
              {`${
                MONTHS[Number(new Date().getMonth())]
              } ${new Date().getDate()}, ${new Date().getFullYear()}`}
            </span>
          </div>
          <div className="hidden lg:flex max-w-10 max-h-10 justify-center p-2 border rounded-full dark:border-slate-700">
            <Image
              src="/Images/nagivation/light-solar_bell-outline.svg"
              alt="notification"
              width={15}
              height={15}
              style={{ width: "20px", height: "auto" }}
              className="hidden dark:block"
            />
            <Image
              src="/Images/nagivation/solar_bell-outline.svg"
              alt="notification"
              width={15}
              height={15}
              style={{ width: "20px", height: "auto" }}
              className="block dark:hidden"
            />
          </div>
          <div
            className="w-[220px] h-[49px] hidden lg:flex justify-between items-center
          gap-2 px-2 border dark:border-slate-700 rounded-full"
          >
            <Image
              src="/Images/nagivation/Profile.svg"
              alt="notification"
              width={15}
              height={30}
              style={{ width: "35px", height: "auto" }}
              className=""
            />
            <div className="flex flex-col justify-center">
              <p className=" mb-[-4px] mt-[-1px]">Justin Bergson</p>
              <p className=" text-gray-500 text-sm">Justin@gmail.com</p>
            </div>
            <Image
              src="/Images/nagivation/ArrowDown-2.svg"
              alt="notification"
              width={15}
              height={30}
              style={{ width: "16px", height: "auto" }}
              className=""
            />
          </div>
        </div>
      </section>
    </nav>
  );
}
