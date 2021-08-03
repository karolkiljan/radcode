import "../styles/Filters.css"
import {useState} from "react";

const Filters = (props) => {
    const [internalLikes, setInternalLikes] = useState(0)

    const getArrayMax = (array) => {
        return Math.max.apply(null, array);
    }
    const maxNumberOfLikes = getArrayMax(props.data.map((post) => post.likes));

    return (
        <div className="Filters">
            <div className="filter">
                <label for="text">Wpisz szukaną frazę</label>
                <input type="text" id="text" onChange={(event) => {
                    props.setText(event.target.value)
                }}/>
            </div>
            <div className="filter">
                <label for="vol">Podaj minimum like'ów</label>
                <p>{internalLikes}</p>
                <input type="range" id="vol" name="vol" defaultValue="0" min="0" max={maxNumberOfLikes} onChange={
                    (event) => {
                        setInternalLikes(event.target.value)
                        props.setLikes(parseInt(event.target.value))
                    }}/>
                <p>{maxNumberOfLikes}</p>
            </div>
        </div>
    )
}

export default Filters;

