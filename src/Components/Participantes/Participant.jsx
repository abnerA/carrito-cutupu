import style from "./Participant.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ButtonParticipant from "./ButtonPartcipant";

function Participant() {
  const start = useSelector((state) => state.inicio);
  const [names, setNames] = useState('');

  useEffect(() => {
    setNames(start.fullMonthArray[start.daySelect - 1])
  }, [start.daySelect, start.fullMonthArray]);

 
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h4>{start.dayWords} {start.daySelect} de {start.monthCurrent}</h4>
        <div 
          className={style.tomorrow} 
          style={{display: 
          start.dayWeekNumber === 1 || start.dayWeekNumber === 4 || start.dayWeekNumber === 6 ? 'block' : 'none' }}>
          <p><strong>Lugar:</strong> {start.dayWeekNumber === 6 ? 'Av. La Cordillera' : 'Curce de Manoguayabo'}</p>
          <h5>{start.dayWeekNumber === 6 ? 'Turno de la mañana 8:00 a 11:00 AM.' : 'Turno de la mañana 7:00 a 10:00 AM.'}</h5>
            <p>{!names ? '' : names[0]}</p> 
            <p>{!names ? '' : names[1]}</p>
            <p>{!names ? '' : names[2]}</p>
            <ButtonParticipant
            title={'Anotarme'}
            section={'morning'}
            action={'added'} />
            <ButtonParticipant
            title={'Quitarme'}
            section={'morning'}
            action={'delete'} />
          <hr />
        </div>
        <div
        className={style.evening} 
        style={{display: start.dayWeekNumber === 1 || start.dayWeekNumber === 2 ? 'block' : 'none' }} >
          <h5>Turno de la tarde de 4:00 a 7:00 PM.</h5>
            <p>{!names ? '' : names[3]}</p>
            <p>{!names ? '' : names[4]}</p>
            <p>{!names ? '' : names[5]}</p>
            <ButtonParticipant
            title={'Anotarme'}
            section={'afternoon'}
            action={'added'} />
            <ButtonParticipant
            title={'Quitarme'}
            section={'afternoon'}
            action={'delete'} />
        </div>
      </div>
    </div>
  );
}

export default Participant;
