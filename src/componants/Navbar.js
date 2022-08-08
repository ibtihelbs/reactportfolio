import React from 'react'

const Navbar = () => {
  return (
    <ul className='absolute flex flex-row gap-2 bg-yellow px-4 flex justify-center'>
      <li> <a href='#Home' >Home</a> </li>
      <li> <a href='#About'>About</a> </li>
      <li> <a href="#Work">Work</a></li>
      <li> <a href="#Contact">Contact</a> </li>
    </ul>
  )
}

export default Navbar
