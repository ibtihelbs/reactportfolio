import Navbar from './Navbar';
const Hero = () =>{
    return(
    <div className="flex flex-row"> 
        <Navbar/>
        <img src="images/hero.jpg" className="w-full md:w-1/2" alt="astro"/>
        <div className="absolute top-4 md:static px-4 flex items-center">
         <h1 className="text-[30px] sm:text-[50px] md:text-[69px] md:text-grayblue" >Hi! I'm Ibtihel Ben Salah a react frontend developer</h1>
         <button className="bg-yellow p-2 float-right sm:text-[40px]" >Contact</button>
        </div>
    </div>
    )
    
}
 
export default Hero;