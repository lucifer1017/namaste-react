import React, { Component } from 'react'
// import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent constructor")
    }
    componentDidMount() {
        // console.log("parent did mount")
    }
    render() {
        // console.log("Parent render")
        return (
            <div>
                <h1>This is About page</h1>
                <div>
                    <UserContext.Consumer>
                        {(data) => {
                            return <h1 className='font-bold'>{data.loggedInUser}</h1>
                        }}
                    </UserContext.Consumer>
                </div>
                {/* {console.log("hi from before loading class based component")} */}
                <UserClass name={"DON"} location={"Prague"} favfruit={"Mangoes"} />


                {/* {console.log("hi from after loading class based component")} */}
            </div>
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>This is About page</h1>
//             {console.log("hi from before loading class based component")}
//             <UserClass name={"DON"} location={"Prague"} favfruit={"Mangoes"} />
//             {console.log("hi from after loading class based component")}
//         </div>
//     )
// }

export default About