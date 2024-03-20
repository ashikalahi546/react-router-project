import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,username,email} = user;
    const userStyle = {
        border:'2px solid red',
        borderRadius:'20px',
        padding:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>{id}</h2>
            <p>{name}</p>
            <h3>{email}</h3>
            <Link to={`/user/${id}`}>Show Details </Link>
         <Link to={`/user/${id}`}> <button>click me</button></Link>  
        </div>
    );
};

export default User;