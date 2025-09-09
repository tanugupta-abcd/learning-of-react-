
import { createRoot } from 'react-dom/client'
import './index.css'

import Event1 from './eventHandling/Event1.jsx'
import Event2 from './eventHandling/Event2.jsx'
import FruitList from './eventHandling/FruitList.jsx'
import Toggle from './eventHandling/Toggle.jsx'
import StateIntro from './introToStates/StateIntro.jsx'
import QandAns from './introToStates/QandAns.jsx'
import StateSnap from './stateSnapShort/stateSnap.jsx'
// import ParentCtoP from './passingData/childToParent/ParentCtoP.jsx'
import ParentPtoC from './passingData/parentToChild/ParentPtoC.jsx'
import Parent from './passingData/childToChild/Parent.jsx'
import ParentChildCounter from './passingData/HW/problem1/ParentChildCounter.jsx'
import ToDoPage from './ToDo/ToDoPage.jsx'



createRoot(document.getElementById('root')).render(


   <>
   {/* <Event1/> */}
   {/* <Event2/> */}
   {/* <FruitList/> */}
   {/* <Toggle/> */}
   {/* <StateIntro/> */}
   {/* <QandAns/> */}
   {/* <div>hello</div> */}
   {/* <StateSnap/> */}
   {/* <ParentPtoC/> */}
   {/* <ParentCtoP/> */}
    {/* <Parent/> */}
   {/* <ParentChildCounter/> */}
   <ToDoPage/>


   </>
)
