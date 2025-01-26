import React from 'react';
import { Wallet, Calculator, Users, BookOpen, PiggyBank, HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router';

function ServicesPage() {

  const services = [
    {
      icon: <Wallet className="h-8 w-8 text-emerald-600" />,
      title: "Business Loans",
      description: "Financial support for small businesses and entrepreneurs with flexible repayment terms.",
      features: ["Up to PKR 500,000", "Flexible terms", "Quick processing"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: "Personal Loans",
      description: "Meet your personal financial needs with our easy-to-access personal loans.",
      features: ["Competitive rates", "Simple documentation", "Fast approval"]
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Group Loans",
      description: "Collective financing solutions for community-based enterprises and groups.",
      features: ["Group liability", "Shared benefits", "Community focus"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Financial Advisory",
      description: "Expert guidance on financial management and business growth.",
      features: ["One-on-one sessions", "Business planning", "Risk management"]
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-emerald-600" />,
      title: "Savings Programs",
      description: "Secure savings solutions to help you build a better financial future.",
      features: ["High returns", "Flexible deposits", "Easy access"]
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
      title: "Islamic Banking",
      description: "Shariah-compliant financing solutions for your peace of mind.",
      features: ["Interest-free", "Ethical financing", "Islamic principles"]
    }
  ];

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your needs and empower your future
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards your financial goals with Saylani Microfinance
          </p>
          <button onClick={()=> navigate("/apply")} className="cursor-pointer bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;