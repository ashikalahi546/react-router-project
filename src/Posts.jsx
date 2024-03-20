import { useLoaderData } from "react-router-dom";
import PostDetails from "./PostDetails";


const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            <div className="post">
                {
                    posts.map(post => <PostDetails post={post} key={post.id}></PostDetails>)
                }
            </div>
        </div>
    );
};

export default Posts;