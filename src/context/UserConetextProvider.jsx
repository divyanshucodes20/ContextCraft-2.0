import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
return (
<UserContext.Provider value={{user,setUser}}>
{children}
</UserContext.Provider>
)
}
export default UserContextProvider
/*
yeh proviider banana hota h wrap karke
<UserContext>
<Login/>
<Card/>
<Data/>    
<UserContext/>
hum jo bhi usercontext me wrap karenege usko global user context ya variables ka access mil jayega
*/