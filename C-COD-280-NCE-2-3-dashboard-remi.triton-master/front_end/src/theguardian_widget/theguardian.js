import React, { useEffect, useState } from 'react';
import styles from './style.module.css';




// const url = "https://content.guardianapis.com/search?q=debates&api-key=8c8aaf70-a1ec-4497-99c9-fddcb03f8cf2";
export default function GuardianWidget() {
  const [results, setArticles] = useState([]);
  useEffect(() => {
    const fetchHolidays = async () => {
      const response = await fetch(`https://content.guardianapis.com/search?&api-key=8c8aaf70-a1ec-4497-99c9-fddcb03f8cf2`)
      const r = (await response.json()).response.results
      setArticles(r);
    };
    // setInterval(fetchHolidays, 15000);

    fetchHolidays();
  }, []);

  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
}

const noAllowDrop = (e) =>{
    e.stopPropagation();
}
  return (

   
        <div className={styles.container} id="guardian" draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
          <h2 className={styles.title}>Guardian news</h2>

          {results.map((article, index) => <div className={styles.article} >
            <h4>{article.webTitle}</h4>
            <a href={article.webUrl} target='_blank' rel="noreferrer">Read more ...</a>
          </div>)}
        </div>)}

