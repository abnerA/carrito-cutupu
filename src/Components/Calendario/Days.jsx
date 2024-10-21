import React, { useEffect, useState } from "react";
import style from "./Days.module.css";
import Day from "./Day";
import { useDispatch } from "react-redux";
import {
  fullArray,
  participants,
  fullDayArray,
} from "../../Redux/features/IniciarSesion";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

 export function month(value) { // Obtengo los días del mes en ingles
  if (value === "Enero") {
    return "jan";
  } else if (value === "Febrero") {
    return "feb";
  } else if (value === "Marzo") {
    return "mar";
  } else if (value === "Abril") {
    return "apr";
  } else if (value === "Mayo") {
    return "may";
  } else if (value === "Junio") {
    return "jun";
  } else if (value === "Julio") {
    return "jul";
  } else if (value === "Agosto") {
    return "aug";
  } else if (value === "Septiembre") {
    return "sep";
  } else if (value === "Octubre") {
    return "oct";
  } else if (value === "Noviembre") {
    return "nov";
  } else if (value === "Diciembre") {
    return "dec";
  }
}


function Days(props) {
  // const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  const [day, setDay] = useState("");
  
  useEffect(() => {
    const starCountRef = ref(dataB, props.stateMonth + "/");
    
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let newList = [];
      for (let i = 1; i < props.totalDays + 1; i++) {
        let numDias = "day" + i;
        newList.push(data[numDias].name);
      }
      setDay(newList);
      dispatch(fullArray(newList));
    });
    dispatch(participants(['', 0, props.stateMonth, 0, props.stateYear]))
  }, [props.stateMonth, props.totalDays, props.stateYear, dispatch]);
  

  const boton = (e) => {
    let obtenerMonth = month(props.stateMonth); // Obtengo los días de la semana en ingles para poder
    let daySelectDate = new Date(`${obtenerMonth} ${e} ${props.stateYear}`); // pasarlo a daySelecDate
    let dayWeek = daySelectDate.getDay(); // Número del día de la semana

    const returnDaySpanish = () => { // Me devuelve el día de la semana en español de acuerdo al número
      if (dayWeek === 0) {
          return 'Domingo';
      } else if (dayWeek === 1) {
        return 'Lunes';
      } else if (dayWeek === 2) {
        return 'Martes'
      } else if (dayWeek === 3) {
        return 'Miércoles';
      } else if (dayWeek === 4) {
        return 'Jueves';
      } else if (dayWeek === 5) {
        return 'Viernes';
      } else if (dayWeek === 6) {
        return 'Sábado';
      }
    }

    const arrName = day[e - 1];

    dispatch(fullDayArray(arrName));


    if (dayWeek === 1 || dayWeek === 2 || dayWeek === 4 || dayWeek === 6) {
      dispatch(participants([returnDaySpanish(), e, props.stateMonth, dayWeek, props.stateYear])); // Día en español - fecha - y el mes - #del día
      }

  };

  return (
    <div className={style.containerDays}>
      {(function () {
        let persons = [];
        for (let i = 1; i < props.totalDays + 1; i++) {
          persons.push(
            <div
              key={i}
              className={style.days}
              onClick={() => boton(i)}
              style={{gridColumnStart: i === 1 && props.firstDay === 0 ? 7 : i === 1 && props.firstDay}}>
              <Day
                num={i}
                currentDay={props.currentDay}
                currentMonth={props.currentMonth}
                stateMonth={props.stateMonth}
                stateYear={props.stateYear}
                currentYear={props.currentYear}
                names={day[i - 1]}
                key={props.stateMonth}
              />
            </div>
          );
        }
        return persons;
      })()}
    </div>
  );
}

export default Days;
