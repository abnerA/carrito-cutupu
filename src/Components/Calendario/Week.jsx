import React, { useEffect, useState } from "react";
// import style from "./Week.module.css";
import Days from "./Days";

function Week(props) {
  const [dia29, setDia29] = useState("block");
  const [dia30, setDia30] = useState("block");
  const [dia31, setDia31] = useState("block");

  // Para saber la cantidad total de días que tienes el mes, en el primer Render.
  useEffect(() => {
    const days = props.totalDays;
    if (days === 28) {
      setDia29({
        dia29: "none",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 29) {
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 30) {
      setDia31({
        dia31: "none",
      });
    }
  }, [props.totalDays]);

  return (
    <Days 
    day29={dia29}
    day30={dia30}
    day31={dia31}
    firstDay={props.firstDay}
    currentDay={props.currentDay}
    currentMonth={props.currentMonth}
    stateMonth={props.stateMonth}
    stateYear={parseInt(props.stateYear)} // Aquí me aseguro que el año pase como un Number y no como un String
    currentYear={props.currentYear}
    totalDays={props.totalDays}
    />
  );
  }

export default Week;
