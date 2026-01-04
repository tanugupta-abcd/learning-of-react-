import { useContext } from "react"
import { AuthContext } from "./auth-context"


const NavBar = () => {
  
 const contextData = useContext(AuthContext);

  return (
    <div style={{background:'lightblue', height:'10vh'}}>
     
      navbar {contextData.name}
    </div>
  )
}

export default NavBar
