import React, { useEffect, useState } from 'react';



export default function JokesWidget() {
  
  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
}

const noAllowDrop = (e) =>{
    e.stopPropagation();
}

  const [results, setArticles] = useState([]);
  useEffect(() => {
    const fetchHolidays = async () => {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any')
      const r = (await response.json())
      setArticles(r);
    };

    fetchHolidays();}, []);

  return (
    <div id='joke'  draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
        {results.setup}
        {results.joke}
        {results.delivery}
    </div>
  );
}