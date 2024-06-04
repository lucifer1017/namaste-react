

const User = (props) => {
    const { name, location } = props;
    return (
        <div className="user">
            <h1>My name is {name}</h1>
            <h3>I live in {location} </h3>
            <h3>I love {props.favfruit} </h3>
        </div>
    )
}
export default User;