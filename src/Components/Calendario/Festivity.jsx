/* eslint-disable no-mixed-operators */
import style from "./Festivity.module.css";

function Festivity(props) {
  const backgroundColorToday =
    props.num === props.currentDay &&
    props.currentMonth === props.stateMonth &&
    props.currentYear === props.stateYear
      ? "rgb(145, 190, 212)" : "#d9e8f5";

  return (
    <>
      <h2
        aria-label={`Día ${props.num}`}
        className={style.dayNum}
        style={{ backgroundColor: backgroundColorToday }}
      >
        {props.num}
      </h2>
    </>
  );
}

export default Festivity;


