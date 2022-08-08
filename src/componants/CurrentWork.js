
const CurrentWork = ({current}) =>{
    return(
        <div className="md:w-1/2 flex flex-row gap-1">
          <div className="w-1/2 hidden md:flex">
           <h1>{current.title}</h1>
           <img className = "w-64" src={current.src} alt={current.title} />
          </div>
          <div className="w-1/2 flex flex-row gap-1">
           <div>{current.technologies.map((e,i)=>( <button className="p-1 bg-yellow m-1 md:text-[18px] text-[10px]" key={i}>{e}</button> ))}</div>
           <p className="text-[12px]">{current.description}</p>
          </div>
        </div>
    )}
 
export default CurrentWork;