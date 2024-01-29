import Image from "next/image";
import NavBarNotification from "./NavbarNotification";
import NavbarSearch from "./NavbarSearch";
import NavbarCurrentDate from "./NavbarCurrentDate";
import NavbarUser from "./NavbarProfile";

export default function Navbar() {
  return (
    <nav className="border dark:border-slate-700 border-x-0 border-t-0 w-full py-5">
      <section className="px-2 lg:container mx-auto flex items-center justify-between ">
        <div className="">
          <h2 className=" text-xl font-semibold">Dashboard</h2>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <NavbarSearch />
          <NavbarCurrentDate />
          <NavBarNotification />
          <NavbarUser />
        </div>
      </section>
    </nav>
  );
}
