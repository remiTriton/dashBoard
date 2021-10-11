import React, {useState} from 'react';
import GuardianWidget from '../theguardian_widget/theguardian';
import Droppable from '../Drop/Droppable';
import Tracker from '../CryptoTracker/Tracker.jsx';
import Food from '../food/Food.js';
import JokesWidget from '../joke_widget/joke'
import Weather from '../meteo_widget/weather.js';
import DisplayDictionary from '../dictionary_widget/DisplayDictionary.js';
import Calendarific from '../calendar_widget/calendarific.jsx';
import Movies from '../movies/movies.jsx';
import DecathlonApi from "../decathlon/DecathlonApi";
import styles from './styles.module.css'

export default function Widgets (){
    const [mov, setMov] = useState(true);
    const [news, setNews] = useState(true);
    const [weath, setWeather] = useState(true);
    const [dico, setDico] = useState(true);
    const [sport, setSport] = useState(true);
    const [date, newDate] = useState(true);
    const [money, setMoney] = useState(true);
    const [food, setFood] = useState(true);
    const [joke, setJoke] = useState(true);

    const sWet = () => setWeather(!weath)
    const sNew = () => setNews(!news)
    const sMov = () => setMov(!mov)
    const sDic = () => setDico(!dico)
    const sSpo = () => setSport(!sport)
    const sDat = () => newDate(!date)
    const sMon = () => setMoney(!money)
    const sFoo = () => setFood(!food)
    const sJok = () => setJoke(!joke)

    return(
                
      
        <div className={styles.container_module}>
          {localStorage.getItem("id") && (
          <><div className={styles._buttons}>
            <button className='' onClick={sMov}>{mov ? "Hide movies" : "Show movies"}</button>
            <button className='' onClick={sNew}>{news ? "Hide news" : "Show news"}</button>
            <button className='' onClick={sWet}>{weath ? "Hide weather" : "Show weather"}</button>
            <button className='' onClick={sDic}>{dico ? "Hide dico" : "Show dico"}</button>
            <button className='' onClick={sSpo}>{sport ? "Hide sports" : "Show sports"}</button>
            <button className='' onClick={sDat}>{date ? "Hide date" : "Show date"}</button>
            <button className='' onClick={sMon}>{money ? "Hide crypto" : "Show cyrpto"}</button>
            <button className='' onClick={sJok}>{joke ? "Hide joke" : "Show joke"}</button>

          </div><><Droppable id='dr1'>
            {mov && (
              <Movies />)}</Droppable><Droppable id='dr2'>
            {news && (
                <GuardianWidget />)}</Droppable>
               <Droppable id='dr3'>
               {dico && (<DisplayDictionary />)}
              </Droppable><Droppable id='d4'>
                {weath &&(<Weather />)}
              </Droppable><Droppable id='d5'>
               {date&&( <Calendarific />)}
              </Droppable><Droppable id='d6'>
               {sport &&( <DecathlonApi />)}
              </Droppable>
              <Droppable id='d7'>
                {money && (<Tracker />)}
                </Droppable>
                <Droppable id='d8'>
               {food &&( <Food />)}
                </Droppable>
                <Droppable id='d9'>
                {joke &&(<JokesWidget />)}
              </Droppable></></>)}
            {!localStorage.getItem("id") &&(<p>You must be authenticaded to use our modules. </p>)}</div>
    )


}