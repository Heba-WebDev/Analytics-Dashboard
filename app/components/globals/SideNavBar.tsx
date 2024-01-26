import ThemeSwitch from "@/app/utils/ThemeSwitch";
import Image from "next/image";
export default function SideNavBar() {
  return (
    <div className="h-screen w-20 flex flex-col">
      <div className=" flex flex-col gap-5 h-full relative">
        {/* <div className=" w-[4px] h-5 rounded-full bg-black absolute -right-[1px] top-[7%]"></div> */}
        <Image
          src="/Images/global/logo.svg"
          alt="dashboard"
          width={30}
          height={30}
          style={{ width: "35px", height: "auto" }}
          className="mx-auto"
        />
        <div className=" flex flex-col justify-between h-4/5">
          <div className=" flex flex-col gap-4">
            <Image
              src="/Images/nagivation/home.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto block dark:hidden"
            />
            <Image
              src="/Images/nagivation/light-home.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto hidden dark:block"
            />
            <Image
              src="/Images/nagivation/numbers.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/users.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/orders.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/platforms.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/help.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <ThemeSwitch />
          </div>
          <div className="">
            <Image
              src="/Images/nagivation/expand.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "140px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/settings.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "40px", height: "auto" }}
              className=" mx-auto"
            />
            <Image
              src="/Images/nagivation/logout.svg"
              alt="dashboard"
              width={24}
              height={24}
              style={{ width: "28px", height: "auto" }}
              className=" mx-auto mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
