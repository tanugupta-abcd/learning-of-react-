import React, { useContext } from 'react'
import { myData } from './auth-context';

const Main = () => {

    const Data = useContext(myData);

  return (
    <div style={{background:'lightpink', height:'80vh'}}>
      main {Data.name}

    </div>
  )
}

export default Main
