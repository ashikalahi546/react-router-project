import { Link, useNavigate } from "react-router-dom";



const PostDetails = ({post}) => {
    const navigate = useNavigate()
    const handleShowDetails = () =>{
navigate(`/post/${id}`)
    }
    
    const {id,title,body} = post;
    const postStyle = {
        border:'2px solid red',
        borderRadius:'20px',
        padding:'10px'
    }
  
    return (
        <div style={postStyle}>
            <h4>{id}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default PostDetails;