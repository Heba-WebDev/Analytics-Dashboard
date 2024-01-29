import Image from "next/image";
export default function NavbarSearch() {
  return (
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
  );
}
