import { Building2, HandHeart, Users } from 'lucide-react'
import React from 'react'

function FeatureSec() {
  return (
    <section>
          <div className="py-24 bg-gray-50 " >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Business Loans</h3>
              <p className="mt-2 text-gray-600">
                Flexible financing options for small businesses and entrepreneurs
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <HandHeart className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Personal Loans</h3>
              <p className="mt-2 text-gray-600">
                Quick and easy personal loans for your immediate needs
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Group Loans</h3>
              <p className="mt-2 text-gray-600">
                Community-based lending solutions for group enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSec