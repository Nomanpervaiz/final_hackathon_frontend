import { ArrowRight, Building2, Menu, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Saylani Microfinance</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link to={"/"} className="text-gray-700 hover:text-emerald-600">Home</Link>
              <Link to={"/about"} className="text-gray-700 hover:text-emerald-600">About</Link>
              <Link to={"/services"} className="text-gray-700 hover:text-emerald-600">Services</Link>
              <Link to={"/contact"} className="text-gray-700 hover:text-emerald-600">Contact</Link>
            </div>

            {/* Apply Button */}
            <button onClick={()=> navigate(user ? "/apply" : "/register" )} className="hidden gap-2 md:flex items-center cursor-pointer bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-400 font-bold">
            {
              user ? 'Apply Now' : 'Register'
            } 
            <ArrowRight size={20} />
            </button>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-emerald-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 py-6 space-y-4">
              <Link to={"/"} className="block text-gray-700 hover:text-emerald-600">Home</Link>
              <Link to={"/about"} className="block text-gray-700 hover:text-emerald-600">About</Link>
              <Link to={"/services"} className="block text-gray-700 hover:text-emerald-600">Services</Link>
              <Link to={"/contact"} className="block text-gray-700 hover:text-emerald-600">Contact</Link>
                 {/* Apply Button */}
            
             {/* Apply Button */}
             <button onClick={()=> navigate(user ? "/apply" : "/register" ) } className="flex gap-2 items-center bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700">
            {
              user ? 'Apply Now' : 'Register'
            } 
            <ArrowRight size={20} />
            </button>

            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
