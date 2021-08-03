import transformData from "./transformData";
import './App.css';
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import {useState} from "react";

const App = () => {
    const data = transformData();
    const [textFilter, setTextFilter] = useState('');
    const [likesFilter, setLikesFilter] = useState(0);

    return (
        <div className="App">
            <Filters data={data} setText={(text) => setTextFilter(text)} setLikes={(likes) => setLikesFilter(likes)}/>
            <Gallery data={data} textFilter={textFilter} likesFilter={likesFilter}/>
        </div>
    );
}

export default App;
