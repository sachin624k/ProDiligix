import { use } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const name = "sanket Yadav";
    return (
        <UserContext.Provider value={{name}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;