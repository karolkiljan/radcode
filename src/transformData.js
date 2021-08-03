import data from "./data";
const transformData = () => {
    const posts = [];
    data.forEach((item) => {
        if(item.node.edge_media_to_caption.edges[0] !== undefined) {
            posts.push({
                "url": item.node.display_url,
                "text": item.node.edge_media_to_caption.edges[0].node.text,
                "likes": item.node.edge_liked_by.count,
            })
        }
    });
    return posts;
}

export default transformData;