import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Time = () => {
  const [horarioAtual, setHorarioAtual] = useState(format(new Date(), "HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setHorarioAtual(format(new Date(), "HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="time">
      <span>{horarioAtual}</span>
    </div>
  );
};

export default Time;