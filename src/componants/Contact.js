
const Contact = () =>{
    return(
    <div id="Contact" className="p-4 md:p-10 bg-yellow h-screen">
        <h1 className="py-5 text-[60px]" >Contact</h1>
        <div className=" flex flex-col md:flex md:flex-row md:flex md:justify-between" >
        <form className ='flex flex-col md:w-1/2 gap-4'>
          <div className="flex flex-col gap-0.5">
            <label>Email</label>
            <input className="p-4" placeholder='email .....'/>
          </div>
          <div className="flex flex-col gap-0.5">
            <label>Subject</label> 
            <input className="p-4" placeholder='subject .....'/>
          </div>
          <div className="flex flex-col gap-0.5">
             <label>Textarea</label>
             <textarea className="p-4" placeholder="message..."></textarea>
          </div>
        </form>
         <div className="p-4 md:border-solid md:border-4 ">
         <ul className="contact info">
           <li className="flex gap-1"><img src="images/social/phone.png"  className="w-4 self-center" alt="phone"/> <span> + 216 92398964</span></li>
           <li className="flex gap-1"><img src="images/social/email.png"  className="w-4 self-center" alt="email"/>ibtihel.bensalah@outlook.fr</li>
           <li className="flex gap-1"><img src="images/social/location.png"  className="w-4 self-center" alt="location"/> hammam lif </li> 
        </ul>
        <ul className="flex flex-row gap-2">
           <li> <a href ='https://www.linkedin.com/in/ibtihel-ben-salah/'><img  className="w-4" src="images/social/linkedin.png" alt="linkedin"/></a></li>
           <li> <a href ='https://github.com/ibtihelbs'><img  className="w-4" src="images/social/github.png" alt="github"/></a></li>
           <li> <a href ='https://codesandbox.io/u/ibtihelbs'><img  className="w-4" src="images/social/sandbox.png" alt="sandbox"/></a></li>
        </ul>
         </div>
        </div>
    </div>
    
    )
    
}
 
export default Contact;