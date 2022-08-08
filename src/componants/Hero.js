import Navbar from './Navbar';
const Hero = () =>{
    return(
    <div className="flex flex-row"> 
        <Navbar/>
        <img src="images/hero.jpg" className="h-full md:w-full md:w-1/2" alt="astro"/>
        <div className="absolute top-4 md:static px-4 flex flex-col flex justify-center">
          <h1 className="" >Hi! I'm Ibtihel Ben Salah <span className="text-[30px] sm:text-[50px] md:text-[55px] md:text-grayblue" ><br/> frontend developer</span> </h1>
          <button className="bg-yellow p-2 float-right sm:text-[20px]" >Contact</button>
        </div>
    </div>
    )
    
}
 
export default Hero;