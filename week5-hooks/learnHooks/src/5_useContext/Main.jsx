import { useContext } from "react"
import { AuthContext } from "./auth-context";


const Main = () => {

    const contextData = useContext(AuthContext);

  return (
    <div style={{background:'lightpink', height:'80vh'}}>
      
         Main {contextData.name}
    </div>
  )
}

export default Main
