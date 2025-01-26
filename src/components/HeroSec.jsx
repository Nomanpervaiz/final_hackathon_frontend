import { ChevronRight } from 'lucide-react'
import React from 'react'

function HeroSec() {
  return (
   <>
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r bg-green-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white " >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering Communities Through Financial Inclusion
              </h1>
              <p className="mt-4 text-lg text-emerald-50">
                We provide accessible microfinance solutions to help individuals and small businesses thrive.
              </p>
              <button className="mt-8 bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 flex items-center">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://theazb.com/wp-content/uploads/2022/10/Saylani-Welfare.jpg"
                alt="People discussing finance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      

   </>
  )
}

export default HeroSec