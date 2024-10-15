import React from "react"
import UserContextProvider from "./context/UserConetextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
//hum log Context Api isliye use karte hai kyuki
//agar hum logo ke pass doosre component se data aara hai
//to hum log props ke through usko leke change karte hai
//but manlo page mei 2 chijen hai aur phle wale mei hume woh 
//props lena padra hai kyuki aaage pass karna hai jabki phle wale ko koi kaam nahi usko
//but kyuki doosre wale ko h toh isliye phle wale ko lena pada this is  not optimize
//we can't  use context api outside react so  we use redux so that jo hum data yaha se waha pass karre hai usko structred way me passs karna baaki saaari languages ke liye react me bhi use kar skte h  
function App() {

  return (
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

  )
}

export default App
