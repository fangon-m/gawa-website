"use client";

import { useEffect, useState } from "react";

function getManilaTime() {
  return `${new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date())} PHT`;
}

export default function PhoneTime() {
  const [time, setTime] = useState("--:-- PHT");

  useEffect(() => {
    const updateTime = () => setTime(getManilaTime());
    updateTime();
    const intervalId = window.setInterval(updateTime, 15_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span className="phone-time" aria-label={`Current time in Manila: ${time}`}>
      {time}
    </span>
  );
}
