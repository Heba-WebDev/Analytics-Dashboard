import Image from "next/image";

export default function Graphe() {
  return (
    <div className=" col-span-2 bg-white h-full flex items-center justify-center">
      <Image
        src="/Images/widgets/placeholder-graphes.svg"
        alt=""
        width={60}
        height={60}
        style={{ width: "600px", height: "auto" }}
        className=" w-full"
      />
    </div>
  );
}
