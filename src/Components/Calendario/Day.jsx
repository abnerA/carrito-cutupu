import style from "./Day.module.css";
import Festivity from "./Festivity";

function Day(props) {
  return (
    <div className={style.container}>
      <div className={style.festivity}>
        <Festivity
          stateMonth={props.stateMonth}
          currentMonth={props.currentMonth}
          stateYear={props.stateYear}
          currentYear={props.currentYear}
          currentDay={props.currentDay}
          num={props.num}
        />
      </div>
    </div>
  );
}

export default Day;
