import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        }
        // console.log(this.props.name + " child constructor")
    }
    async componentDidMount() {
        // console.log(this.props.name + " child did mount")
        const data = await fetch("https://api.github.com/users/lucifer1017");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })

    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        // const { name, location } = this.props;
        // console.log(this.props.name + " child render")
        return (
            <div className="userclass">

                <h1>My name is {name} </h1>
                <img className="userclass-img" src={avatar_url} />
                <h3>I live in {location} </h3>
                {/* <h3>I love {this.props.favfruit} </h3> */}
            </div>
        )
    }
}
// console.log("Hi From class based component")
export default UserClass;