import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {id,name,website} = user
    return (
        <div>
        <h4>{id}</h4>
            <h5>name:{name}</h5>
            <h4>website: {website}</h4>
        </div>
    );
};

export default UserDetails;