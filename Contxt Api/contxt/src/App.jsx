import Login from "./Comp/login.jsx";
import Profile from "./Comp/profile.jsx";
import UserContextProvider from "./Context/userContextProvider.jsx"
import "./App.css"


function App() {
  return (
    <body>
      
    <UserContextProvider>
     <h1><b><h1><i className='login'>HELLO! Soban Imran</i></h1></b></h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
    </body>
  )
}

export default App