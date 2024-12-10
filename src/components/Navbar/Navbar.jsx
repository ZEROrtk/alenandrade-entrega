import {Link} from 'react-router-dom';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from '../Logo/logoz.png'
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   const content = <>
    <div className="font-['Open_Sans']  lg:hidden block absolute top-16 w-full left-0 right-0 bg-yellow-20 transition">
        <ul className="text-center text-x1 p-20"> 
            <Link spy={true} smooth={true} to="/">
                <li className=" my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer bg-yellow-200">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Productos">
                <li className="my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer bg-yellow-200">Productos</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
                <li className=" my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer bg-yellow-200">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact"> 
            <li className=" my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer bg-yellow-200">Contact</li> 
            </Link>
            <Link spy={true} smooth={true} to="Cart"> 
            <li className=" my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer bg-yellow-200"><CiShoppingCart /></li> 
            </Link>
        </ul>
    </div>
   </>
  return (
    <nav>
        <div className=" font-['Open_Sans'] h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 bg-yellow-200">
       
            <div className="flex items-center flex-1">
              <a className="logo">
            <img src={logo} alt="" />
               </a>
               
            </div>
            <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden ">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                    
                    <Link spy={true} smooth={true}to="/">
                    <li className="hover:text-green-400 transition cursor-pointer">Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Productos">
                    <li className=" hover:text-green-400 transition cursor-pointer">Productos</li>
                    </Link>
                    <Link spy={true} smooth={true} to="About">
                    <li className=" hover:text-green-400 transition cursor-pointer">About</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Contact">
                    <li className=" hover:text-green-400 transition cursor-pointer">Contact</li>
                    </Link>
                    <Link spy={true} smooth={true} to="/Cart">
                    <li className=" hover:text-green-400 transition cursor-pointer "><CiShoppingCart /></li>
                    </Link>
                </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transtion" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
        </div>
    </nav>
  )
 }

export default Navbar;