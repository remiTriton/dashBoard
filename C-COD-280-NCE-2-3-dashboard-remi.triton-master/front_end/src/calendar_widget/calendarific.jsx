import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

//const url ="https://holidays.abstractapi.com/v1/?api_key=b5cd5d203ed84cfeb11c512da380488a&country=US&year=2020&month=12&day=25"

export default function Calendarific() {

   const drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

  const  noAllowDrop = (e) =>{
        e.stopPropagation();
    }
    const [holidays, setHolidays] = useState([])

    // YYYY-MM-DD
    // 2021-08-31
    const dNow = new Date().toISOString().slice(0, 10);

    const [calendarInput, setCalendarInput] = useState(dNow);

    useEffect(
        // arrow function
        () => {
            const fetchHolidays = async () => {
                // YYYY-MM-DD
                const [y, m, d] = calendarInput.split('-');
                const url = `https://holidays.abstractapi.com/v1/?api_key=b5cd5d203ed84cfeb11c512da380488a&country=FR&year=${y}&month=${m}&day=${d}`;
                const response = await fetch(url);
                setHolidays(await response.json());
            };
            fetchHolidays();
        },
        [calendarInput],
    );

    return (
        <div id="calendar" draggable="true" onDragStart={drag} onDragOver={noAllowDrop} >
        <input className={styles.input}
                   type='date'
                   value={calendarInput}
                   onChange={({target}) => {
                       setCalendarInput(target.value)
                   }}/>
            {/*[data, data, data].map((d) => jsx)
            map list of data to list of jsx*/}
         <ul>
                {holidays.map((holiday, i) => (
                    <li className={styles.container} key={i}>
                        <div>
                            <span>{holiday.name}</span>
                            <span>{holiday.country}</span>
                        </div>
                        <div className={styles.type}>
                            <span>{holiday.location}</span>
                            <span>{holiday.type}</span>
                        </div>
                        <div className={styles.date}>
                            <span>{holiday.date}</span>
                        </div>
                        <div className={styles.selection}>
                            <span>{holiday.date_year}</span>
                            <span>{holiday.date_month}</span>
                            <span>{holiday.date_day}</span>
                            <span>{holiday.week_day}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}