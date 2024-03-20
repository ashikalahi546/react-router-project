import { useLoaderData, useNavigate } from "react-router-dom";


const Post = () => {
    const postDetails = useLoaderData();
    const {id,title} = postDetails
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>id: {id}</h3>
            <h3>Tittle: {title}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Post;