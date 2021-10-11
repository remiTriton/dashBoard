import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
const API_KEY = "?api_key=ea747e23118ffc6086a4c9dd049ff674";
const IMG = "https://image.tmdb.org/t/p/w200/";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [overview, setOverview] = useState(false);

  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
}

const noAllowDrop = (e) =>{
    e.stopPropagation();
}
  
  const onClick = () => setOverview(!overview);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie" + API_KEY
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const searchMovie = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie" + API_KEY + "&query=" + search
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  };

  return (
    <div className={styles.module} id="movies" draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
      <h2 className={styles.title}>Movies</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          searchMovie();
        }}
      >
        S
      </button>
      <div className={styles.container}>
        {movies.slice(0, 10).map((movie, i) => (
          <div key={i} className={styles.movie}>
            <img src={IMG + movie.backdrop_path} />
            <div className={styles.votes}>
              <h4>{movie.original_title}</h4>
              <span>{movie.vote_average}</span>
            </div>
            <button className="btn btn-dark" onClick={onClick}>
              {overview ? "Hide" : "Overview"}
            </button>
            {overview && (
              <div className={styles.overview}>{movie.overview}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
