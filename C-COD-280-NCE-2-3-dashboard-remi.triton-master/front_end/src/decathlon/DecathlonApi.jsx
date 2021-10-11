import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css";

export default function DecathlonApi() {
    const [sports, setSports] = useState([])
    const [filteredSports, setFilteredSports] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

    const noAllowDrop = (e) =>{
        e.stopPropagation();
    }
    /// 1/ retrieve all sports
    /// 2/ when sports have been retrieved start to search
    /// first time, there is nothing is the search, so all sport are displayed
    /// after changing the value of the input, the filter is executed again

    useEffect(
        // arrow function
        () => {
            const fetchSPports = async () => {
                const url = "https://sports.api.decathlon.com/sports";
                const response = await fetch(url);
                const r = (await response.json()).data;
                setSports(r);
            };
            fetchSPports();
        },
        [] // <-- mandatory to avoid infinite loop,
    );



    useEffect(() => {
        setFilteredSports(sports.filter((sport) => {
            const reg = new RegExp(searchWord, 'g');

            return sport.attributes.name?.toLowerCase().search(reg) > -1;
        }))
    }, [sports, searchWord]) // <-- watch changes of `sport` and `searchWord`

    return (
        <div id='decatlon' draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
            <input className={styles.search}
                type="text"
                placeholder="Search..."
                onChange={({target}) => setSearchWord(target.value)} />

            <ul className={styles.size}>
                {filteredSports.slice(0, 1).map((sport) => (
                    <li className={styles.clientInformation} key={sport.id}>
                        <div className={styles.title}>{sport.attributes.name}</div>
                        <div>{sport.attributes.parent_id}</div>
                        <div>{sport.attributes.description}</div>
                        <div>{sport.attributes.weather}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}