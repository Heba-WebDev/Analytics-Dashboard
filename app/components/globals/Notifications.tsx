import Image from "next/image";
export default function Notifications({
  showNotification,
  setShowNotification,
}: {
  showNotification: boolean;
  setShowNotification: Function;
}) {
  return (
    <div
      className="absolute bg-white dark:bg-slate-800 shadow-lg
    border dark:border-slate-700 top-12 -left-[590%] w-[250px] h-[140px]
    "
    >
      <div className="border border-x-0 border-t-0 px-2 flex w-full items-center justify-between py-1">
        <h4 className=" font-medium text-base">Notifications</h4>
        <button
          onClick={() => setShowNotification(false)}
          className="text-sm  p-1 flex items-center justify-center rounded-full"
        >
          <Image
            src="/Images/nagivation/close-light.svg"
            alt="close notification"
            width={15}
            height={15}
            style={{ width: "20px" }}
            className="block dark:hidden"
          />
          <Image
            src="/Images/nagivation/close-dark.svg"
            alt="close notification"
            width={15}
            height={15}
            style={{ width: "20px" }}
            className="hidden dark:block"
          />
        </button>
      </div>
      <div>
        <p className=" text-sm text-gray-600 text-center pt-6">
          No notifications!
        </p>
      </div>
    </div>
  );
}
