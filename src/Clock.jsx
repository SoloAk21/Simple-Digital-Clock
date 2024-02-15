import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dateString = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const hour = date.getHours() % 12 || 12;
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  const meridian = hour < 12 ? "AM" : "PM";

  return (
    <div className="datetime">
      <div className="date">
        <span>{dateString}</span>
      </div>
      <div className="time">
        <span>{hour}</span>:<span>{minute}</span>:<span>{second}</span>
        <span>{meridian}</span>
      </div>
    </div>
  );
}

export default Clock;
