import  {useState , useContext} from 'react'
import UserContext from './../Context/userContext.js'
import "./../App.css"


function Login() {
  const [username , setUsername] = useState(''); 
  const [password,setPassword] = useState('')

const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
  e.preventDefault();
  setUser({username,password})
  }

    return (
    <div>
        <div>
             <h1><b><h1><i className='loginn' >Login</i></h1></b></h1>
        </div>
        <input className='box' type='text' placeholder='user Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input  className='boxx' type='password' placeholder='Enter your pw' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button className='boxing' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login