import  {useContext}from 'react'
import UserContext from './../Context/userContext.js'
import "./../App.css"


function Profile() {
    const {user} = useContext(UserContext)
    if(!user)
  return  <div className='jahel'><b><i><h1> PLEASE LOGIN !!!</h1></i></b></div>

  return <div className='jahel'><b><i>WELCOME  {user.username} & {user.password}</i></b></div>
}

export default Profile