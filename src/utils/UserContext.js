import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Def User",
})

export default UserContext;