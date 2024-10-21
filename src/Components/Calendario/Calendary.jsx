import React from "react";
import style from "./Calendary.module.css";
import Months from "./Months";

export let monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date();
let monthNumber = currentDate.getMonth(); // Mes
let currentYear = currentDate.getFullYear(); // Año

let mes = monthNames[monthNumber];
let year = currentYear.toString();

class Calendary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: `${mes}`, año: `${year}`, mes: `${monthNumber}` };
    this.lastMonth = this.lastMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.startDay = this.startDay.bind(this);
  }

  // Function para saber cual es el primer día del mes
  startDay() {
    let start = new Date(this.state.año, this.state.mes, 1);
    return start.getDay();
  }

  // Button para pasar al mes anterior
  lastMonth() {
    if (monthNumber !== 0) {
      monthNumber--;
    } else {
      monthNumber = 11;
      currentYear--;
    }
    this.setState({
      month: monthNames[monthNumber],
      año: currentYear,
      mes: monthNumber,
    });
    this.startDay();
  }

  // Button para pasar al mes siguiente
  nextMonth() {
    if (monthNumber !== 11) {
      monthNumber++;
    } else {
      monthNumber = 0;
      currentYear++;
    }
    this.setState({
      month: monthNames[monthNumber],
      año: currentYear,
      mes: monthNumber,
    });
    this.startDay();
  }

  render() {
    return (
      <div className={style.calendary}>
        <div className={style.container}>
          <div className={style.navigation}>
              <button onClick={this.lastMonth} className={style.btnLast} aria-label="Cambiar al mes pasado">
                <img src="img/left.svg" alt="arrow-left" />
              </button>
              <h4 className={style.title}>{this.state.month} {this.state.año}</h4>
            <button onClick={this.nextMonth} className={style.btnNext} aria-label="Cambiar al mes siguiente">
              <img src="img/right.svg" alt="arrow-right" />
            </button>
          </div>
          <Months
            numMonth={this.state.mes}
            stateMonth={this.state.month}
            currentMonth={mes}
            stateYear={this.state.año}
            currentYear={parseInt(year)}
            firstDay={this.startDay()}
            currentDay={currentDate.getDate()}
          />
        </div>
      </div>
    );
  }
}

export default Calendary;

