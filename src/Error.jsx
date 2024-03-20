import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div>
            <h2>Error</h2>
            <p>{error.statusText || error.status}</p>
            
        </div>
    );
};

export default Error;