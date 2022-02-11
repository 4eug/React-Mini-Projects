import { useEffect } from "react";

function Filter(setActiveGenre, activeGenre, setFiltered, popular){

    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre]);

    return(
        <div>
            <button className="filter-container" onClick={() => setActiveGenre(0)}>All</button>
            <button className="filter-container" onClick={() => setActiveGenre(28)}>Action</button>
            <button className="filter-container" onClick={() => setActiveGenre(35)}>Comdey</button>
        </div>
    )
}

export default Filter;