import { useLoaderData } from "react-router-dom";


const Post = () => {
    const postDetails = useLoaderData();
    const {id,title} = postDetails
    return (
        <div>
            <h3>id: {id}</h3>
            <h3>Tittle: {title}</h3>
        </div>
    );
};

export default Post;