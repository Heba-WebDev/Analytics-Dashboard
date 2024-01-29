import Image from "next/image";
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
export default function NavbarCurrentDate() {
  return (
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
  );
}
