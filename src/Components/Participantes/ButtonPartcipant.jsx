import { addparticipation } from "../../firebase/firebase";
import { useSelector } from "react-redux";

function ButtonParticipant(props) {
  const start = useSelector((state) => state.inicio);
  let dayNum = "day" + start.daySelect;
  let month = start.monthCurrent + "/";
  let user = start.userLogin;
  let daySelect = start.daySelect
  let arrName = start.fullMonthArray[daySelect -1];
  // console.log(arrName);

  const handleClick = () => {
    const objCopy = [...arrName];
    
if (props.section === 'morning' && props.action === 'added' && !objCopy.slice(0, 3).includes(user) && objCopy.indexOf('') !== -1) {
      let arrIndex = arrName.indexOf('');
      objCopy[arrIndex] = user;
      addparticipation(dayNum, objCopy, `${month}/`);
      // console.log('ya estás anotado en la mañana');
    } else if (props.section === 'morning' && props.action === 'delete' && objCopy.slice(0, 3).includes(user)) {
      let arrIndex = arrName.indexOf(user);
      objCopy[arrIndex] = '';
      addparticipation(dayNum, objCopy, `${month}/`);
      // console.log('Te has eliminado correctamente');
    } else if (props.section === 'afternoon' && props.action === 'added' && !objCopy.slice(3, 6).includes(user) && objCopy.indexOf('') !== -1) {
      let newArray = arrName.slice(0, 3);
      let cutArr = arrName.slice(3, 6);
      let arrIndex = cutArr.indexOf('');
      cutArr[arrIndex] = user;
      let arrReady = newArray.concat(cutArr);
      addparticipation(dayNum, arrReady, `${month}/`);
      // console.log('estas anotado en la tarde');
    } else if (props.section === 'afternoon' && props.action === 'delete' && objCopy.slice(3, 6).includes(user)) {
      let newArray = arrName.slice(0, 3);
      let cutArr = arrName.slice(3, 6);
      let arrIndex = cutArr.indexOf(user);
      cutArr[arrIndex] = '';
      let arrReady = newArray.concat(cutArr);
      addparticipation(dayNum, arrReady, `${month}/`);
      // console.log('Te has eliminado de la tarde');
    }

  }

  return (
    <>
      <button onClick={handleClick}>{props.title}</button>
    </>
  );
}

export default ButtonParticipant;
