import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

function CTA() {
    const navigate = useNavigate()
    
  return (
   <section>
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-emerald-50">
              Join thousands of satisfied customers who have transformed their lives
            </p>
            <button onClick={()=> navigate("/apply")} className="mt-8 cursor-pointer bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 inline-flex items-center">
              Apply for a Loan <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

   </section>
  )
}

export default CTA