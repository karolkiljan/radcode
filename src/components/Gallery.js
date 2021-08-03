import Post from "./Post";
import "../styles/Gallery.css"
import {useEffect, useState} from "react";

const Gallery = (props) => {
    const [availablePosts, setAvailablePosts] = useState(props.data.sort((a, b) => (a.likes < b.likes ? 1 : -1)));

    useEffect(() => {
        setAvailablePosts(
            props.data.filter(
                (post) => {
                    if (props.textFilter !== "") {
                        return post.likes >= props.likesFilter && post.text.includes(props.textFilter)
                    }
                    return post.likes >= props.likesFilter
                }
            )
        );
    }, [props.likesFilter, props.textFilter])
    return (
        <div className="Gallery">
            {availablePosts.map((post) => (<Post url={post.url} likes={post.likes} text={post.text}/>))}
        </div>
    )
}

export default Gallery;