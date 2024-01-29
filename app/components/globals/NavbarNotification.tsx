"use client";
import { useState } from "react";
import Image from "next/image";
import Notifications from "./Notifiatons";

export default function NavBarNotification() {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div className="relative flex justify-center p-2 border rounded-full dark:border-slate-700">
      <button
        onClick={() => setShowNotification(true)}
        className="max-w-10 max-h-10"
      >
        <Image
          src="/Images/nagivation/light-solar_bell-outline.svg"
          alt="notification"
          width={15}
          height={15}
          style={{ width: "20px", height: "auto" }}
          className="hidden dark:block opacity-45"
        />
        <Image
          src="/Images/nagivation/solar_bell-outline.svg"
          alt="notification"
          width={15}
          height={15}
          style={{ width: "20px", height: "auto" }}
          className="block dark:hidden"
        />
      </button>
      {showNotification && (
        <Notifications
          showNotification={showNotification}
          setShowNotification={setShowNotification}
        />
      )}
    </div>
  );
}
