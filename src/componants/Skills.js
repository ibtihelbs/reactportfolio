const Skills = ()=>{
    const icons = [
        "images/icons/figma.svg",
        "images/icons/react.svg",
        "images/icons/tailwind-css.svg",
        "images/icons/js.svg",
        "images/icons/css.svg",
        "images/icons/html.svg"
    ]
    return(
        <div className="md:flex md:flex-row flex flex-col">
           {icons.map((i,id) => (<img key={id} className="w-14" src={i} alt="skills"/>))}
        </div>
    )
}
/**<img className="w-14" src={icons.tailwindcss} alt="tailwind css"/>
            <img className="w-14" src={icons.js} alt="js"/>
            <img className="w-14" src={icons.figma} alt="figma"/>
            <img className="w-14" src={icons.css} alt="css"/>
            <img className="w-14" src={icons.html} alt="html"/> */
export default Skills;