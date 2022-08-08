import { useState, useEffect } from 'react';
import Data from '../data.json';
import MiniNav from './MiniNav';
import CurrentWork from './CurrentWork';
const Work = () =>{
    const [dataArray, setDataArray]= useState([])
    useEffect(()=>{
        const getData = async () => {
            setDataArray(Data)
         }
         getData();
    },[dataArray])
   
    
    const [display, setDisplay] = useState(0);
    const current = dataArray[display];
    console.log(current, dataArray[display])
    return(
        <div id="Work" className="h-screen p-4">
          <h1 className ="text-[60px] py-4">Portfolio</h1>
           {current ?
           <div className="md:flex md:flex-row flex flex-col">
             <MiniNav setDisplay={setDisplay} title= {current.title} data = {dataArray} />
             <CurrentWork current={current} display={display} />
           </div>        
             : console.log('loading')}
        </div>

        ) 
}
 
export default Work;