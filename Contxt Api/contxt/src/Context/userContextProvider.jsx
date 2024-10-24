// its jsx base 
import React  from "react";
import UserContext from "./userContext";
import PropTypes from 'prop-types';


const UserContextProvider = ({children}) => {
const [user,setUser] = React.useState(null);
return (
<UserContext.Provider value={{user,setUser}}>

{children}

</UserContext.Provider>


)


}


export default UserContextProvider;


UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
