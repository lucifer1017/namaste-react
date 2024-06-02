import { useRouteError } from "react-router-dom";
const Error = () => {

    const err = useRouteError();
    return (
        <div className="error">
            <h1>oops, just fuck off</h1>
            <h4> {err.status}: {err.statusText} </h4>
        </div>
    )
}

export default Error;