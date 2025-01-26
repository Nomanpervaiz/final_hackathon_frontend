import React from 'react';
import { Building2, Users, HandHeart, Award } from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Saylani Microfinance</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering communities through financial inclusion and sustainable development
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide accessible financial services to underserved communities, fostering economic growth and self-reliance through ethical microfinance solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading microfinance institution known for transparency, innovation, and positive social impact in communities across Pakistan.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Established</h3>
            <p className="text-gray-600">Since 2010</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Clients Served</h3>
            <p className="text-gray-600">100,000+</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HandHeart className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Loan Disbursed</h3>
            <p className="text-gray-600">PKR 5 Billion+</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Success Rate</h3>
            <p className="text-gray-600">98%</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">Transparency</h3>
              <p className="text-gray-600">Clear and honest communication in all our operations and transactions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Integrity</h3>
              <p className="text-gray-600">Maintaining the highest ethical standards in all our dealings.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">Empowerment</h3>
              <p className="text-gray-600">Enabling individuals and communities to achieve financial independence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;