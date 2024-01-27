import Image from "next/image";
const ORDERS = [
  {
    icon: "/Images/last-orders/marcos.svg",
    name: "Marcus Bergson",
    date: "Jan 10, 2024",
    amount: "$80,000",
    status: "Paid",
  },
  {
    icon: "/Images/last-orders/jaydon.svg",
    name: "Jaydon Vaccaro",
    date: "Jan 10, 2024",
    amount: "$150,000",
    status: "Refund",
  },
  {
    icon: "/Images/last-orders/corey.svg",
    name: "Corey Schleifer",
    date: "Jan 8, 2024",
    amount: "$87,000",
    status: "Paid",
  },
  {
    icon: "/Images/last-orders/cooper.svg",
    name: "Cooper Press",
    date: "Jan 7, 2024",
    amount: "$100,000",
    status: "Refund",
  },
  {
    icon: "/Images/last-orders/phillip.svg",
    name: "Phillip Lubin",
    date: "Jan 5, 2024",
    amount: "$78,000",
    status: "Paid",
  },
];

import React from "react";

const ProductTable = () => {
  const products = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    // Add more products as needed
  ];

  return (
    <div className="bg-white border  w-full p-4 dark:border-slate-800 dark:bg-slate-800 shadow-md sm:rounded-lg">
      <table className="w-full  overflow-auto leading-normal text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#9CA4AB] tracking-wider dark:bg-slate-800 dark:text-gray-400">
          <tr className=" text-base font-medium">
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((order, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Image
                  src={order.icon}
                  alt={order.name}
                  width={30}
                  height={30}
                  style={{ width: "30px", height: "auto" }}
                  className=" rounded-full"
                />
                {order.name}
              </th>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4">{order.amount}</td>
              <td
                className={`px-6 py-4 ${
                  order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
                }`}
              >
                {order.status}
              </td>
              <td className="px-6 py-4 flex items-center gap-1">
                <Image
                  src="/Images/last-orders/view.svg"
                  alt="invoice"
                  width={30}
                  height={30}
                  style={{ width: "15px", height: "auto" }}
                  className=""
                />
                <p>View</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
