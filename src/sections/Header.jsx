import React, {useState} from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen (!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen (false);
  }
 
  const navItem = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]
  return (
  <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16
  px-6 py-4 sticky top-0 z-50'>
    <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>Prime
      <span className='text-yellow-500 italic'>Structures</span></h1>
  <ul className='lg:flex justify-center items-center gap-6 hidden'>
    {navItem.map (({link,path }) =>(
<Link key={path} className='text-black uppercase font-bold cursor-pointer
p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]' 
target={path} spy={true} offset={-100} smooth={true}>{link}</Link>
    ))}
    </ul>
    <button className='bg-yellow-500 hover:bg-black
    hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform cursor-pointer md:flex hidden'>Reach Us</button>
  </nav>
  )
}

export default Header
