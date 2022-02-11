import './App.css';
import {useEffect, useState } from "react";
import Movie from './Movies';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await 
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef9f7f8ea44e544125214de8cc03eefc&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <motion.div layout className="App">
      <Filter
       popular={popular}
        setFiltered={setFiltered}
         activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          />
      <div className='popular-movies'>
        <AnimatePresence>
        {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie}/>
        })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default App;
