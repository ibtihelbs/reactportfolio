
const CurrentWork = ({data, setDisplay, title}) =>{
    return(
      <ul className='flex flex-row md:flex md:flex-col md:w-1/2 md:divide-y md:p-6 text-[10px]'>
         {
          data.map((e,i)=>(
            <li className = {`${title === e.title ? 'bg-active' : ''} py-6 hover:opacity-50 hover:cursor-pointer`} onClick={()=>setDisplay(i)} key={i}>{e.title}</li>
          ))}
      </ul>
    )
    
}
 
export default CurrentWork;