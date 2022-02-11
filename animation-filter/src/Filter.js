import { useEffect } from "react";

function Filter(){
    return(
        <div>
            <button className="filter-container">Sci-fi</button>
            <button className="filter-container">Action</button>
            <button className="filter-container">Comdey</button>
        </div>
    )
}

export default Filter;