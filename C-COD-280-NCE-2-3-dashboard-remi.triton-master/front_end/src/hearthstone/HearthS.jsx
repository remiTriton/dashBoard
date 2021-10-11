import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from "./styles.module.css"

export default function Hearthstone(){

    const [cards, setCards] = useState([]);

    useEffect( 
            
                () => {
                    var options = {
                        method: 'GET',
                        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/%horde%7D',                        headers: {
                          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                          'x-rapidapi-key': 'e4f81a7a40msh3f38e57791a5ea7p18b048jsneed409bc9937'
                        }
                      };
                      
                      axios.request(options).then(function (response) {
                        setCards(response.data)

                          console.log(response.data);
                      }).catch(function (error) {
                          console.error(error);
                      });},[])

          return(
              <><p>Hello world</p>
              <div className={styles.conTAiner}>
              {cards.map((e) => ( 

                  <div className={styles.cardHS}>
                   <img src={e.img} /></div>
                   
              ))}</div>
          </>)


}
    