interface props {
  index: number;
  name: string;
  presentage: string;
  revenue: string;
  revenuePresentage: string;
}

const COLORS = ["6160DC", "54C5EB", "FFB74A", "FF4A55"];
export default function ProgressBar({
  index,
  name,
  presentage,
  revenue,
  revenuePresentage,
}: props) {
  return (
    <div className=" relative w-full h-2 rounded-lg bg-[#F5F5F5]">
      <div
        className={`top-0 w-2/3 h-2 rounded-lg bg-[#${COLORS[index]}]`}
      ></div>
    </div>
  );
}
