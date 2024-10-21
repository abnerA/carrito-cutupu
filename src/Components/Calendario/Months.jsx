/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import React from "react";
import style from "./Months.module.css";
import Week from "./Week";

class Months extends React.Component {
  constructor(props) {
    super(props);
    this.getTotalDays = this.getTotalDays.bind(this);
    this.isLeap = this.isLeap.bind(this);
  }

  //Function para saber la cantidad exacta de días que tiene el mes
  getTotalDays(month) {
    if (
      month == 0 ||
      month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 7 ||
      month == 9 ||
      month == 11
    ) {
      return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;
    } else {
      return this.isLeap() ? 29 : 28;
    }
  }

  // Function para saber si el año es Bisiesto
  isLeap() {
    return (
      (this.props.stateYear % 100 !== 0 && this.props.stateYear % 4 === 0) ||
      this.props.stateYear % 400 === 0
    );
  }

  render() {
    const dias = this.getTotalDays(this.props.numMonth); // Para saber la cantidad de días que tiene el mes
    return (
      <div className={style.container}>
        <div className={style.week}>
          <div className={style.daysWeek}>Lun</div>
          <div className={style.daysWeek}>Mar</div>
          <div className={style.daysWeek}>Mié</div>
          <div className={style.daysWeek}>Jue</div>
          <div className={style.daysWeek}>Vie</div>
          <div className={style.daysWeek}>Sáb</div>
          <div className={style.daysWeek}>Dom</div>
        </div>
        <Week 
        totalDays={dias} 
        firstDay={this.props.firstDay} 
        key={dias} 
        currentDay={this.props.currentDay}
        currentMonth={this.props.currentMonth}
        stateMonth={this.props.stateMonth}
        stateYear={this.props.stateYear}
        currentYear={this.props.currentYear} />
      </div>
    );
  }
}

export default Months;
