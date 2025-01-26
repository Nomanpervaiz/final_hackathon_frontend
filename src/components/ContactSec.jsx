import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function ContactSec() {
  return (
    <section>
         <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Get in touch with our team for any inquiries or support
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <span className="ml-4 text-gray-600">+92 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  <span className="ml-4 text-gray-600">contact@saylanimicrofinance.org</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <span className="ml-4 text-gray-600">Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="block  text-sm font-medium text-gray-700">Name</label>
                    <input placeholder='Enter Your Name' type="text" className="mt-1 p-2  h-10 block w-full  rounded-md bg-white border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input placeholder='Enter Your Email' type="email" className="mt-1 p-2 block h-10 w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSec