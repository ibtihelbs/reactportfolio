import Skills from './Skills'
const About = () =>{
    return(
     <div id="About" className="p-4 flex flex-col flex justify-center h-screen bg-yellow">
        <h1 className='md:text-[60px] text-[50px]'>About</h1>
        <div className="md:flex md:flex-col flex flex-row">
        <p className="w-2/3">Hi! I'm Ibtihel Ben Salah a react frontend developer, who's familiar with wordpress, and mern stack applications.
           If you need a responsive, accessible with hight performance client-side website that maximizes that retention of your visitor
           contact me.
        </p>
        <Skills/>
        </div>
     </div>
    )
    
}
 
export default About;