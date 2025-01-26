import { Building2 } from 'lucide-react'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

function Footer() {
  const {user,logout} = useContext(UserContext)
  return (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-xl font-bold">Saylani Microfinance</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering communities through financial inclusion and support.
              </p>
{
  user ?
  <button onClick={()=> logout() } className='cursor-pointer my-5 border rounded-full px-6  py-2'>Log out</button>
  :
  null
}

            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Apply Now</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Business Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Personal Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Group Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Financial Advisory</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Saylani Microfinance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
  )
}

export default Footer